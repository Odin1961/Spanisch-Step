const UpdateManager={
  registration:null,

  async init(){
    if(!("serviceWorker" in navigator))return;

    try{
      this.registration=await navigator.serviceWorker.ready;

      this.registration.addEventListener("updatefound",()=>{
        const worker=this.registration.installing;
        if(!worker)return;

        worker.addEventListener("statechange",()=>{
          if(
            worker.state==="installed" &&
            navigator.serviceWorker.controller
          ){
            this.showUpdate();
          }
        });
      });
    }catch(error){
      AppStability.record(error,"update-manager");
    }
  },

  showUpdate(){
    if(document.getElementById("updateBanner"))return;

    const banner=document.createElement("div");
    banner.id="updateBanner";
    banner.className="update-banner";
    banner.innerHTML=`
      <span>Eine neue App-Version ist bereit.</span>
      <button id="reloadUpdate">Jetzt laden</button>
      <button id="dismissUpdate">Später</button>`;

    document.body.appendChild(banner);

    document.getElementById("reloadUpdate").onclick=()=>{
      saveNow();
      location.reload();
    };

    document.getElementById("dismissUpdate").onclick=()=>{
      banner.remove();
    };
  }
};

UpdateManager.init();
