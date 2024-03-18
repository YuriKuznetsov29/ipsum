import * as nodePath from "path"

const rootFolder = nodePath.basename(nodePath.resolve())

const build = "./dist"
const src = "./src"

export const path = {
    build: {
        js: `${build}/js/`,
        images: `${build}/img/`,
        css: `${build}/css/`,
        html: `${build}`,
        files: `${build}/files/`,
        fonts: `${build}/files/`,
    },
    src: {
        js: `${src}/js/app.js`,
        images: `${src}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${src}/img/**/*.svg`,
        scss: `${src}/scss/style.scss`,
        html: `${src}/*.pug`,
        files: `${src}/files/**/*.*`,
        fonts: `${src}/fonts/`,
    },
    watch: {
        js: `${src}/js/**/*.js`,
        images: `${src}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${src}/scss/**/*.scss`,
        html: `${src}/**/*.pug`,
        files: `${src}/files/**/*.*`,
    },
    clean: build,
    buildFolder: build,
    srcFolder: src,
    rootFolder: rootFolder,
    ftp: "",
}
