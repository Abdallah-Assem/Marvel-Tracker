document.querySelectorAll('[data-copy-instapay]').forEach(button=>{
  button.addEventListener('click',async()=>{
    const section=button.closest('.support-panel');
    const address=section.querySelector('.support-address');
    const status=section.querySelector('.support-status');
    try{
      await navigator.clipboard.writeText(address.value);
      status.textContent='InstaPay address copied. Paste it into the InstaPay app to send your support.';
    }catch{
      address.focus();
      address.select();
      status.textContent='Select and copy the InstaPay address above, then paste it into the InstaPay app.';
    }
  });
});
