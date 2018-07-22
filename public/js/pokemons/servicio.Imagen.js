let imgUrl = '';

$(function() {

    $.cloudinary.config({cloud_name: 'davidserrano', api_key: 'davidserrano' });

        // Upload button
        let uploadButton = $('#subirFoto');

        // Upload button event
        uploadButton.on('click', function(e){
            // Initiate upload
            cloudinary.openUploadWidget({ cloud_name: 'davidserrano', upload_preset: 'Examen', tags: ['cgal']},
            function(error, result) {
                if(error) console.log(error);
                // If NO error, log image data to console
                let id = result[0].public_id;
                 console.log(id);
                 imgUrl = 'http://res.cloudinary.com/davidserrano/image/upload/' + id;
                 imgUrl = processImage(id);
                console.log(imgUrl);
                document.querySelector('#subirFoto').src = imgUrl;
                // uploadButton.value = imgUrl;

                
                 return imgUrl;
            });
        });

})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}