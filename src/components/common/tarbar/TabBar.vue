<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style>
    #tab-bar{
        display: flex;
        background: #f6f6f6;
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        box-shadow:0 -1px 1px rgba(100,100,100,.2);
        height: 49px;
    }
</style>
