import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let a={email:"",message:""};const e=document.querySelector(".feedback-form");e.addEventListener("input",t=>{a.email=e.email.value,a.message=e.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))});localStorage.getItem("feedback-form-state")&&(a=JSON.parse(localStorage.getItem("feedback-form-state")),e.email.value=a.email.trim(),e.message.value=a.message.trim());e.addEventListener("submit",t=>{if(t.preventDefault(),e.email.value===""||e.message.value===""){alert("Fill please all fields");return}console.log(a),e.reset(),a={email:"",message:""},localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=2-form.js.map
