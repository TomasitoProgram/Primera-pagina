

$(document).ready(function() {

    $.get('https://fakestoreapi.com/products', function(data) {


        $.each(data, function(i, item){

            html =         
            `   <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.description}</p>
                      <a href="#" class="btn btn-primary">Api</a>
                    </div>
                  </div>

                </div>
                 `;
            
    
        $('#lista_ropa').append(html); 
                
         

        }); 

    });

})