<template>
  <div class="hello">
    <div
      id="luckysheet"
      style="margin:0px;padding:0px;position:absolute;width:100%;height:100%;left: 0px;top: 0px;"
    ></div>
  </div>
</template>

<script>
export default {
  name: "excelPreview",
  mounted() {
    // 处理左上角返回按钮跳转链接
    let backUrl = location.origin + "/home";
    var options = {
      container: "luckysheet", //容器的ID
      myFolderUrl: backUrl, //左上角<返回按钮的链接
      title: "HC-excel", // 工作簿名称
      lang: "zh", // 设定表格语言 国际化设置，允许设置表格的语言，支持中文("zh")和英文("en")
      allowCopy: false, // 是否允许拷贝
      showtoolbar: false, // 是否显示工具栏
      showtoolbarConfig: {
        undoRedo: false, //撤销重做，注意撤消重做是两个按钮，由这一个配置决定显示还是隐藏
        paintFormat: false, //格式刷
        currencyFormat: false, //货币格式
        percentageFormat: false, //百分比格式
        numberDecrease: false, // '减少小数位数'
        numberIncrease: false, // '增加小数位数
        moreFormats: false, // '更多格式'
        font: false, // '字体'
        fontSize: false, // '字号大小'
        bold: false, // '粗体 (Ctrl+B)'
        italic: false, // '斜体 (Ctrl+I)'
        strikethrough: false, // '删除线 (Alt+Shift+5)'
        textColor: false, // '文本颜色'
        fillColor: false, // '单元格颜色'
        border: false, // '边框'
        mergeCell: false, // '合并单元格'
        horizontalAlignMode: false, // '水平对齐方式'
        verticalAlignMode: false, // '垂直对齐方式'
        textWrapMode: false, // '换行方式'
        textRotateMode: false, // '文本旋转方式'
        image: false, // '插入图片'
        link: false, // '插入链接'
        chart: false, // '图表'（图标隐藏，但是如果配置了chart插件，右击仍然可以新建图表）
        postil: false, //'批注'
        pivotTable: false, //'数据透视表'
        function: false, // '公式'
        frozenMode: false, // '冻结方式'
        sortAndFilter: false, // '排序和筛选'
        conditionalFormat: false, // '条件格式'
        dataVerification: false, // '数据验证'
        splitColumn: false, // '分列'
        screenshot: false, // '截图'
        findAndReplace: false, // '查找替换'
        protection: false, // '工作表保护'
        print: false, // '打印'
      },
      showinfobar: true, // 是否显示顶部信息栏
      showsheetbar: true, // 是否显示底部sheet页按钮
      showsheetbarConfig: {
        add: false, //新增sheet
        menu: false, //sheet管理菜单
        sheet: true, //sheet页显示
      },
      showstatisticBar: true, // 是否显示底部计数栏
      showstatisticBarConfig: {
        count: false, // 计数栏
        view: false, // 打印视图
        zoom: true, // 缩放
      },
      sheetBottomConfig: true, // sheet页下方的添加行按钮和回到顶部按钮配置
      sheetBottomConfigConfig: {
        addRow: false, // 添加行按钮
        backTop: true, // 回到顶部
      },
      allowEdit: false, // 是否允许前台编辑
      enableAddRow: false, // 允许增加行
      enableAddCol: false, // 允许增加列
      userInfo: false, // 右上角的用户信息展示样式
      cellRightClickConfig: {
        // 自定义配置单元格右击菜单
        copy: false, // 复制
        copyAs: false, // 复制为
        paste: false, // 粘贴
        insert: false, // 插入
        delete: false, // 删除
        hide: false, // 隐藏
        deleteCell: false, // 删除单元格
        clear: false, // 清除内容
        matrix: false, // 矩阵操作选区
        sort: false, // 排序选区
        filter: false, // 筛选选区
        chart: false, // 图表生成
      },
      sheetRightClickConfig: {
        // 自定义配置sheet页右击菜单
        delete: false, // 删除
        copy: false, // 复制
        rename: false, //重命名
        color: false, //更改颜色
        hide: false, //隐藏
        show: false, //取消隐藏
        left: false, //向左移
        right: false, //向右移
      },
      showRowBar: true, // 是否显示行号区域
      showColumnBar: true, // 是否显示列号区域
      sheetFormulaBar: true, // 是否显示公式栏
      defaultFontSize: 14, // 初始化默认字体大小 默认值：11
      data: [
        {
          name: "sheet1",
        },
      ],
    };
    let _this = this;
    $(function() {
      let value = _this.$route.query.url;
      var name = value.substring(value.lastIndexOf("/") + 1);
      var mask = document.getElementById("lucky-mask-demo");
      mask.style.display = "flex";
      window.LuckyExcel.transformExcelToLuckyByUrl(value, name, function(
        exportJson,
        luckysheetfile
      ) {
        if (exportJson.sheets == null || exportJson.sheets.length == 0) {
          alert(
            "Failed to read the content of the excel file, currently does not support xls files!"
          );
          return;
        }
        console.log(exportJson);
        mask.style.display = "none";
        luckysheet.destroy();

        luckysheet.create({
          ...options,
          container: "luckysheet", //luckysheet is the container id
          data: exportJson.sheets,
          title: exportJson.info.name,
        });
      });
    });
  },
};
</script>

<style scoped></style>
