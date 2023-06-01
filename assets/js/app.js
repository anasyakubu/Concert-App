// $(document).on('submit', '#messageForm', function (e) {
//   e.preventDefault();

//   var formData = new FormData(this);
//   formData.append("message_form", true);

//   $.ajax({
//     type: "POST",
//     url: "http://localhost/php-api/customers/create.php",
//     data: formData,
//     processData: false,
//     contentType: false,
//     success: function (response) {
//       // alert(JSON.stringify(response));

//       var data = response;
//       // console.log(data);
//       // console.log(data.status);
//       // console.log(data.message);
//       if (data.status == 201) {
//         alert(data.message);
//         $('#messageForm')[0].reset();
//       } else if (data.status == 422) {
//         alert(data.message);
//       } else if (data.status == 500) {
//         alert(data.message);
//       }
//     }
//   });
// });