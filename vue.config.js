module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/tailwindcss_fb_ui/'
  : './',
  //outputDir: 'plugin-lib', // 產出的資料夾名稱
  //assetsDir: 'dist', // 靜態檔的資料夾名稱
  //filenameHashing: true // bundle出來的檔案是否要有hash值
}