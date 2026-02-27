chrome.runtime.sendMessage({type:"AI_BLOCK_REQUEST",prompt:"Create a block that says hello"},(response)=>{ console.log("Generated block code:",response.blockCode); });
