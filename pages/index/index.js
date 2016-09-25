//index.js
Page({
  data: {
    list:[],
    complete:0
  },
  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value
    })
    
  },
  add:function(){
    var list = this.data.list;
    list.push({checked:false,value:this.data.inputValue});
    this.setData({
      list:list,
      inputValue:''
    })
  },
  delete:function(e){
    var list = this.data.list;
    list.splice(e.target.dataset.index,1)
    this.setData({
      list:list
    })
    this.com_task()
  },
  change:function(e){
    console.log(e.detail.value[0])
    var list = this.data.list;
    list[e.target.dataset.index].checked = !!e.detail.value[0]
    this.setData({
      list:list
    })
    this.com_task()
  },
  com_task:function(){
    var complete = 0,list = this.data.list;
    for(var i=0,len=list.length;i<len;i++){
      console.log(list[i].checked)
      if(list[i].checked!=false){
        complete++
      }
    }
    this.setData({
      complete:complete
    })
  }
})
