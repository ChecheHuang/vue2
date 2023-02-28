<template>
  <div class="hello">
    <h1>Hello</h1>
    <el-button>按我</el-button>
    <i class="fa fa-users"></i>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>
<style lang="scss">
  .hello{
    background: yellow;
    h1{
      color: white;
    }
  }
</style>
