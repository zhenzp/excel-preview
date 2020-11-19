<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhenzipu
 * @Date: 2020-11-05 14:49:25
 * @LastEditors: zhenzipu
 * @LastEditTime: 2020-11-19 16:14:55
-->
<template>
  <div class="home-con">
    <h2>.xlsx文件预览</h2>
    <i>基于luckysheet及luckyexcel做的嵌入vue项目demo 只支持纯文本、日期、数字、图片单元格格式 去掉原有编辑功能</i>
    <p v-for="(item,idx) in aLink" :key="idx" @click="handleClickJump(item.link)">
      {{item.name}}
    </p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      aLink: [
        {
          name: "测试url1",
          link:
            "https://minio.cnbabylon.com/public/luckysheet/money-manager-2.xlsx",
        },
        {
          name: "测试url2",
          link:
            "https://minio.cnbabylon.com/public/luckysheet/Activity%20costs%20tracker.xlsx",
        },
        {
          name: "测试url3",
          link:
            "https://minio.cnbabylon.com/public/luckysheet/House%20cleaning%20checklist.xlsx",
        },
        {
          name: "测试url4",
          link:
            "https://minio.cnbabylon.com/public/luckysheet/Student%20assignment%20planner.xlsx",
        },
      ],
    };
  },
  methods:{
    handleClickJump(url){
      let routeUrl = this.$router.resolve({
        name: "excelPreview",
        query: { url:url },
      });
      window.open(routeUrl.href, "_blank");
    }
  }
};
</script>

<style>
.home-con {
  text-align: center;
}
p{
  line-height: 30px;
  cursor: pointer;
}
p:hover{
  color: #037aff;
}
</style>
