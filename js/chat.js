$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui();

  // 为发送按钮绑定鼠标点击事件
  $('#btnSend').on('click', function () {
    // trim去除字符两边的空格
    var text = $('#ipt').val().trim();
    if (text.length <= 0) {
      // 清空内容
      return $('#ipt').val('');
    }
    // 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
    $('#talk_list').append('<li class="right_word"><img src="image/jiqiren/person02.png" /> <span>' + text + '</span></li>')
    $('#ipt').val('')
    // 重置滚动条的位置
    resetui();
    // 发起请求，获取聊天内容
    getMsg(text);
  })


  // 获取聊天机器人发送回来的消息get是用来接受数据的
  function getMsg(text) {
    $.ajax({
      method: 'GET',
      url: 'http://www.liulongbin.top:3006/api/robot',
      // 发送的数据，数据为函数的形参
      data: {
        spoken: text
      },
      // 数据发送成功后有一个数据(res)返回给用户
      success: function (res) {
        // console.log(res)
        if (res.message === 'success') {
          // 接收聊天消息
          var msg = res.data.info.text
          $('#talk_list').append('<li class="left_word"><img src="image/jiqiren/person01.png" /> <span>' + msg + '</span></li>')
          // 重置滚动条的位置
          resetui();
          // 调用 getVoice 函数，把文本转化为语音
          getVoice(msg)
        }
      }
    })
  }

  // 把文字转化为语音进行播放
  function getVoice(text) {
    $.ajax({
      method: 'GET',
      url: ' http://www.liulongbin.top:3006/api/synthesize',
      // 发送的数据,数据为函数的形参
      data: {
        text: text
      },
      // 数据发送成功后有一个数据(res)返回给用户
      success: function (res) {
        // console.log(res)
        if (res.status === 200) {
          // 播放语音
          $('#voice').attr('src', res.voiceUrl)
        }
      }
    })
  }

  // 为文本框绑定 keyup 事件
  $('#ipt').on('keyup', function (e) {
    // 返回按下键盘的Code值
    console.log(e.keyCode)
    if (e.key === 'Enter') {
      // console.log('用户弹起了回车键')
      $('#btnSend').click()
    }
  })
})