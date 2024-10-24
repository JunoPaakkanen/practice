// script joka muuttaa kuvan

$(document).ready(function(){
    const $kuvat = ["kissa.jpg","lasipallo.jpg", "kermit.jpg", "lexuslfa.jpg"];
    let $laskuri= 0;
$("#B").click(function(){
    $("#kuva_id").attr("src", $kuvat[$laskuri]);
    $laskuri+=1;
        
        if ($laskuri>= $kuvat.length) {
            $laskuri =0;
            
        }
    });    




    $("#A").click(function(){
            
            $("#kuva_id").attr("src", $kuvat[0]);
            $laskuri =1;
        });    
    });

