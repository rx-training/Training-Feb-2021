$(document).ready(function(){
    $("select#state").change(function(){
        var selectedstate = $(this).children("option:selected").val();
      
      if(selectedCountry == 'get'){
       $('#city').pop(' <option>ahm</option><option>abc</option><option>def</option><option>gi</option>');

      }
    });
    });