<script>
 function getPrice() {
      var original = 10;
      if(commission) { //買畫的價格，依畫家當時的名氣，若有簽約則僅須付初始價格
        price = original;
      } else {
        price = current;
      }  
      return price;
    }
    
    console.log()
</script>


public function getPdf(Request $request)
  {}
