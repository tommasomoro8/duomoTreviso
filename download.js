var downloadedOneTime = false;
        function windows(){
           downloadcontentwindows.addEventListener('click', () => {
            if (downloadedOneTime) return;
            
            download("downloadWindows/Duomo di Treviso.zip", "Duomo Treviso");

            downloadedOneTime = true;
        })
    }
        function mac(){
        downloadcontentmac.addEventListener('click', () => {
            if (downloadedOneTime) return;
            
            download("downloadMac/Duomo di Treviso.zip", "Duomo Treviso");

            downloadedOneTime = true;
        })
    }
    	function vr(){
    		downloadcontentvr.addEventListener('click', () => {
            if (downloadedOneTime) return;
            
            download("downloadVr/Duomo di Treviso.zip", "Duomo Treviso");

            downloadedOneTime = true;
        })
    }

        function download(fileUrl, fileName) {
            var a = document.createElement("a");
            a.href = fileUrl;
            a.setAttribute("download", fileName);
            a.click();
        }