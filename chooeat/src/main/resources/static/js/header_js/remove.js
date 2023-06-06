btnre.addEventListener('click', e => {
  fetch('logout', { method: 'POST' })
    .then(res => {
      if (res.ok) {
        // 登出成功
        sessionStorage.removeItem('loginReq');
        alert('已登出');
        window.location.href = 'login.html';
      } else {
        // 登出失敗
        alert('登出失敗');
      }
    })
    .catch(error => {
      console.error('錯誤:', error);
      alert('登出失敗');
    });
});


//---------------------------------login登出結束------------------------------------------------------------

