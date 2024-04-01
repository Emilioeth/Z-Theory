function ValidateEmail(input) {

    var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (input.match(validRegex)) {
  
      return true;
  
    } else {
  
      return false;
  
    }
  
}

function applyFormActivation() {

    setTimeout(() => {
        ApplyForm()
    }, 1500);

    console.log('hello (:')
}


function ApplyForm() {	

    const nameApply = document.querySelector('#name-apply');
    const emailApply = document.querySelector('#email-apply');
    const commentsApply = document.querySelector('#comments-apply');
    const verifyApply = document.querySelector('#verify-apply');
    const btnApply = document.querySelector('#submit-btn-apply');

    btnApply.addEventListener('click', function(){

        $('#message-apply div').remove();

        if(nameApply.value.trim() == '') {
            $('#message-apply').append('<div class="error_message">You must enter your name.</div>')
        }
        else if(emailApply.value.trim() == '') {
            $('#message-apply').append('<div class="error_message">Please enter a valid email address.</div>')
        }
        else if(!ValidateEmail(emailApply.value)) {
            $('#message-apply').append('<div class="error_message">You have enter an invalid e-mail address, try again.</div>')
        }
        else if(commentsApply.value.trim() == '') {
            $('#message-apply').append('<div class="error_message">Please enter a message.</div>')
        }
        else if(verifyApply.value.trim() == '' ) {
            $('#message-apply').append('<div class="error_message">Please complete the captcha validation.</div>')
        }
        else if(verifyApply.value.trim() != '4' ) {
            $('#message-apply').append('<div class="error_message">The verification number you entered is incorrect.</div>')
        }
        else {
            document.querySelector('#applyform').submit();
        }


        
    })

    nameApply.addEventListener("change", function(){
        $('#message-apply div').remove();
    })
    emailApply.addEventListener("change", function(){
        $('#message-apply div').remove();
    })
    commentsApply.addEventListener("change", function(){
        $('#message-apply div').remove();
    })
    verifyApply.addEventListener("change", function(){
        $('#message-apply div').remove();
    })


}//End ApplyForm	