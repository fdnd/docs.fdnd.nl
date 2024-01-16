import { read, readSync, writeSync } from 'to-vfile'

import fs from 'fs-extra'
import markdownParser from './helpers/markdown-parser.js'
import path from 'path'
import recursiveReadDir from 'recursive-readdir'

const buildDir = 'build'
const docsDir = 'docs'
let menu = []

// Read the docs dir recursively and pass the result to dirListHandler
recursiveReadDir(docsDir, dirListHandler)

/**
 * Build a menu, then get extra file info and pass each file to the fileHanlder
 * @param {*} error an error object that contains errors when things go wrong
 * @param {*} files an array of files
 */
function dirListHandler(error, files) {
  if (error) throw error
  menu = buildMenu(files) // IMPURE!
  files.map((file) => getFileInfo(file)).forEach((file) => fileHandler(file))
}

/**
 * Build a menu using the passed files array, first we filter out .md files,
 * then we get the info we need and finally sort it by name, but put home first
 * @param {*} files an array of files
 * @returns an array containing the menu items
 */
function buildMenu(files) {
  return files
    .filter((file) => path.extname(file) === '.md')
    .map((file) => getMenuInfo(file))
    .sort((a, b) => (a.menuname > b.menuname ? 1 : b.menuname > a.menuname ? -1 : 0))
    .sort((a, b) => (a.menuname === 'Home' ? -1 : b.menuname === 'Home' ? 1 : 0))
}

/**
 * Gets required info for menu items
 * @param {*} file a file handle
 * @returns an object containing info for the menu item
 */
function getMenuInfo(file) {
  const basename = path.basename(file)
  const extname = path.extname(file)
  const menuname = capitalize(path.basename(file).replace(path.extname(file), '').replaceAll('-', ' '))
  const href = path.basename(file).replace(path.extname(file), '.html')

  return { basename, extname, menuname: menuname === 'Index' ? 'Home' : menuname, href }
}

/**
 * Capitalizes the passed word and returns it
 * @param {*} word the word to be capitalized
 * @returns a capitalized version of the passed word
 */
function capitalize(word) {
  // return word.charAt(0).toUpperCase() + word.slice(1)
  return word
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Get some info for a file using the native path package
 * @param {*} file a file handle
 * @returns an object containing info for the file
 */
function getFileInfo(file) {
  const name = file
  const basename = path.basename(file)
  const extname = path.extname(file)
  const dirname = path.dirname(file)
  const destname = buildDir + dirname.replace(docsDir, '')

  return { name, basename, extname, dirname, destname, menu } // IMPURE!
}

/**
 * Decides what to do with a given file, parse or copy
 * @param {*} file a file handle
 */
function fileHandler(file) {
  if (file.extname === '.md') {
    markdownParser.process(readSync(file), copyToBuildDir)
  } else {
    read(file, copyToBuildDir)
  }
}

/**
 * Preferable called as callback for a to-vfile function. Ensures if a targeted
 * folder exists and then copies the file to the targeted folder.
 * @param {*} error an error object that contains errors when things go wrong
 * @param {*} file a file handle
 */
function copyToBuildDir(error, file) {
  if (error) throw error

  // Make sure the target folder exists
  file.dirname = getTargetDirname(file)
  fs.ensureDirSync(file.dirname)

  file.extname = getTargetExtname(file)
  writeSync(file)
}

/**
 * Returns a set destionation folder or the build dir
 * @param {*} file a file handle
 * @returns the target dirname
 */
function getTargetDirname(file) {
  return file.destname ?? buildDir
}

/**
 * Returns the target extension name
 * @param {*} file a file handle
 * @returns the target extension name
 */
function getTargetExtname(file) {
  return file.extname === '.md' ? '.html' : file.extname
}
