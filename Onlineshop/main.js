<script type="text/javascript">
  
var images = new Array();

function preloadImages(){
  
    for (i=0; i < preloadImages.arguments.length; i++){
         images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}
preloadImages("product1.jpg", "product2.jpg", "product3.jpg", "product4.jpg");

</script>
