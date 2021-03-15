$(document).ready( function() {
    $("select[id*='country'").change(function(){
        var selectedCountry = $(this).children("option:selected").val();
        
        if(selectedCountry == 'India') {
            $("select[id*='states']").empty().append(`<option value="Gujrat">Gujrat</option>
                <option value="MP">MP</option>
                <option value="UP">UP</option>
                <option value="Rajastan">Rajastan</option>
                `)
        } else if(selectedCountry == 'US') {
            $("select[id*='states']").empty().append(`<option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Georgia">Georgia</option>
                <option value="Florida">Florida</option>
                `)
        } else if(selectedCountry == 'Canada') {
            $("select[id*='states']").empty().append(`<option value="Alberta">Alberta</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Nunavut">Nunavut</option>
                `)
        } else if(selectedCountry == 'Japan') {
            $("select[id*='states']").empty().append(`<option value="Hokkaidu">Hokkaidu</option>
                <option value="Tohoku">Tohoku</option>
                <option value="Kanto">Kanto</option>
                <option value="Chubu">Chubu</option>
                `)
        } 
    });

    
})

