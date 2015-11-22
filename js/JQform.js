/* JS DOCUMENT BY JQ */
$(function(){
	$('#JQreg form')[0].reset();  //表单初始化  将一个jQuery对象转换成DOM对象：[index]和.get(index); 
	$('#JQregButton').on('click',function(){
		$('#JQreg').show();
	});
	$('#JQreg h2 img').on('click',function(){
		$('#JQreg').hide();
	});
//表单用户名效果
	var JQformUserName=$('#JQreg input[name="userName"]');
	var JQformInfoUser=$('#JQreg .infoUser');
	var JQformErrorUser = $('#JQreg .errorUser');
	var JQformSuccUser=$('#JQreg .succUser');
	JQformUserName.on('focus',function(){		
		JQformInfoUser.show();
		JQformErrorUser.hide();
		JQformSuccUser.hide();
	}).on('blur',function(){
		if($(this).val().trim()==''){		
			JQformInfoUser.hide();
		}else if(!checkUserName()){
			JQformErrorUser.show();			
			JQformSuccUser.hide();
			JQformInfoUser.hide();
		}else{
			JQformErrorUser.hide();
			JQformSuccUser.show();
			JQformInfoUser.hide(); 
		}
	});
	function checkUserName(){
		if(/[\w]{2,4}/.test(JQformUserName.val())) return true;
	}
//表单密码
	var JQformPassword=$('#JQreg input[name="password"]');
	var JQformInfoPwd=$('#JQreg .infoPwd');
	var JQformErrorPwd= $('#JQreg .errorPwd');
	var JQformSuccPwd=$('#JQreg .succPwd');
	JQformPassword.on('focus',function(){
		JQformInfoPwd.show();
		JQformErrorPwd.hide();
		JQformSuccPwd.hide();
	}).on('blur',function(){
		if($(this).val().trim()==''){		
			JQformInfoPwd.hide();
		}else {
			if(checkPwd(this)){				
				JQformInfoPwd.hide();
				JQformErrorPwd.hide();
				JQformSuccPwd.show();
			}else{			
				JQformErrorPwd.show();
				JQformInfoPwd.hide();
				JQformSuccPwd.hide(); 
			}
		}
	});
	JQformPassword.on('keyup',function(){
		checkPwd(this);
	});
//检查密码
	var JQformInfoQ1=$('#JQreg .infoPwd .q1');
	var JQformInfoQ2=$('#JQreg .infoPwd .q2');
	var JQformInfoQ3=$('#JQreg .infoPwd .q3');
	
	function checkPwd(_this){
		var value = $(_this).val().trim();
		var valueLength = value.length;
		var codeLength = 0;
		if(valueLength >=6 && valueLength <=20){   //第一个条件满足即亮
			JQformInfoQ1.html('●').css('color','green');
		}else{
			JQformInfoQ1.html('○').css('color','#666');
		}
		if(valueLength > 0 && !/\s/.test(value)){   //第二个条件满足即亮
			JQformInfoQ2.html('●').css('color','green');
		}else{
			JQformInfoQ2.html('○').css('color','#666');
		}
		
		if(/[\d]/.test(value)){
			codeLength++;
		}
		if(/[a-z]/.test(value)){
			codeLength++;
		}
		if(/[A-Z]/.test(value)){
			codeLength++;
		}
		if(/[^\w]/.test(value)){   //a-zA-Z0-9_   
			codeLength++;
		}
		if(codeLength >=2){     //第二个条件满足即亮
			JQformInfoQ3.html('●').css('color','green');
		}else{
			JQformInfoQ3.html('○').css('color','#666');
		}
		//检测密码的复杂度，用来显示密码的强度
		var JQformInfoPwdS1=$('#JQreg .infoPwd .s1');
		var JQformInfoPwdS2=$('#JQreg .infoPwd .s2');
		var JQformInfoPwdS3=$('#JQreg .infoPwd .s3');
		var JQformInfoPwdS4=$('#JQreg .infoPwd .s4');
		if(codeLength >=3 && valueLength>=10){
			JQformInfoPwdS1.css('color','green');
			JQformInfoPwdS2.css('color','green');
			JQformInfoPwdS3.css('color','green');
			JQformInfoPwdS4.html('高').css('color','green');
		}else if(codeLength >=2 && valueLength>=8){
			JQformInfoPwdS1.css('color','#f60');
			JQformInfoPwdS2.css('color','#f60');
			JQformInfoPwdS3.css('color','#ccc');
			JQformInfoPwdS4.html('中').css('color','#f60');	
		}else if(codeLength >=1){
			JQformInfoPwdS1.css('color','maroon');
			JQformInfoPwdS2.css('color','#ccc');
			JQformInfoPwdS3.css('color','#ccc');
			JQformInfoPwdS4.html('低').css('color','maroon');	
		}else{
			JQformInfoPwdS1.css('color','#ccc');
			JQformInfoPwdS2.css('color','#ccc');
			JQformInfoPwdS3.css('color','#ccc');
			JQformInfoPwdS4.html(' ').css('color','#ccc');
		}
		
		if(valueLength >=6 && valueLength<20 && codeLength >=2){
			return true;
		}else{
			return false;
		}
		
	}
//确认密码
	var JQformRepwd=$('#JQreg input[name="repwd"]');
	var JQformInfoRepwd=$('#JQreg .infoRepwd');
	var JQformErrorRepwd=$('#JQreg .errorRepwd');
	var JQformSuccRepwd=$('#JQreg .succRepwd');
	JQformRepwd.on('focus',function(){
		JQformInfoRepwd.show();
		JQformErrorRepwd.hide();
		JQformSuccRepwd.hide();
	}).on('blur',function(){
		if($(this).val().trim()==''){		
			JQformInfoRepwd.hide();
		}else if(checkRepwd()){			
			JQformInfoRepwd.hide();
			JQformErrorRepwd.hide();
			JQformSuccRepwd.show();			
		}else{
			JQformInfoRepwd.hide();
			JQformErrorRepwd.show();
			JQformSuccRepwd.hide();			
		}
	});
	function checkRepwd(){
		if(JQformRepwd.val() ==JQformPassword.val()) return true;
	}
//问题回答
	var JQformAnswer=$('#JQreg input[name="answer"]');
	var JQformInfoAnswer=$('#JQreg .infoAnswer');
	var JQformErrorAnswer=$('#JQreg .errorAnswer');
	var JQformSuccAnswer=$('#JQreg .succAnswer');
	JQformAnswer.on('focus',function(){
		JQformInfoAnswer.show();
		JQformErrorAnswer.hide();
		JQformSuccAnswer.hide();
	}).on('blur',function(){
		if($(this).val().trim()==''){		
			JQformInfoAnswer.hide();
		}else if($(this).val().length >=2 && $(this).val().length <=32){	
			JQformInfoAnswer.hide();
			JQformErrorAnswer.hide();
			JQformSuccAnswer.show();
		}else{
			JQformInfoAnswer.hide();
			JQformErrorAnswer.show();
			JQformSuccAnswer.hide();
		}
	});
//电子邮件
	var JQformEmail=$('#JQreg input[name="email"]');
	var JQformInfoEmail=$('#JQreg .infoEmail');
	var JQformErrorEmail=$('#JQreg .errorEmail');
	var JQformSuccEmail=$('#JQreg .succEmail');
	var JQformSuccAllEmail=$('#JQreg dl dd ul.allEmail');
	var JQformSuccAllEmailLi=$('#JQreg dl dd ul.allEmail li');
	JQformEmail.on('focus',function(){
		JQformInfoEmail.show();
		JQformErrorEmail.hide();
		JQformSuccEmail.hide();
		if($(this).val().indexOf('@') == -1 && $(this).val()!=''){   //补全界面显示
			JQformSuccAllEmail.show();  
		} 
	}).on('blur',function(){
		JQformSuccAllEmail.hide();  //补全界面隐藏
		if($(this).val().trim()==''){
			JQformInfoEmail.hide();
		}else if(/^[\w\.-]+@[\w-]+(\.[a-zA-Z]{2,4}){1,2}$/.test($(this).val().trim())){	
			JQformInfoEmail.hide();
			JQformErrorEmail.hide();
			JQformSuccEmail.show();
		}else{
			JQformInfoEmail.hide();
			JQformErrorEmail.show();
			JQformSuccEmail.hide();
		}
	});
	//电子邮件补全 移入移出
	JQformSuccAllEmailLi.hover(
		function(){
			$(this).css('background', '#E5EDF2');
			$(this).css('color', '#369');
		},
		function(){
			$(this).css('background', 'none');
			$(this).css('color', '#666');
		}
	);
	//电子邮件补全 键入
	JQformEmail.on('keyup',function(e){
		if($(this).val().indexOf('@') == -1){
			JQformSuccAllEmail.show(); 
			$('#JQreg dl dd ul.allEmail li span').html($(this).val());
		}else{
			JQformSuccAllEmail.hide(); 
		}
		
		JQformSuccAllEmailLi.css('color', '#666');
		JQformSuccAllEmailLi.css('background', 'none');
		var liLength=JQformSuccAllEmailLi.index();  //补全邮件种类的个数  length-1也行
		//alert(liLength);
		if(e.keyCode==40){
			if(this.n == undefined || this.n >=liLength){    //？？？？ 为什么只能用this.*
				this.n=0;
			}else{
				this.n++;
			}
			JQformSuccAllEmailLi.eq(this.n).css('background', '#e5edf2');
			JQformSuccAllEmailLi.eq(this.n).css('color', '#369');
		}
		
		if(e.keyCode==38){
			if(this.n == undefined || this.n <0){   
				this.n=liLength;
			}else{
				this.n--;
			}
			JQformSuccAllEmailLi.eq(this.n).css('background', '#e5edf2');
			JQformSuccAllEmailLi.eq(this.n).css('color', '#369');
		}
		if(e.keyCode==13){
			$(this).val(JQformSuccAllEmailLi.eq(this.n).text());
			JQformSuccAllEmail.hide();
			this.n=undefined;
			
			if($(this).val().trim()==''){		
				JQformInfoEmail.hide();
				JQformSuccAllEmail.hide();  //补全界面
			}else if(/^[\w\.-]+@[\w-]+(\.[a-zA-Z]{2,4}){1,2}$/.test($(this).val().trim())){	
				JQformInfoEmail.hide();
				JQformErrorEmail.hide();
				JQformSuccEmail.show();
			}else{
				JQformInfoEmail.hide();
				JQformErrorEmail.show();
				JQformSuccEmail.hide();
			}
		}
	});
	//电子邮件补全 点击补全
	JQformSuccAllEmailLi.on('mousedown',function(){
		JQformEmail.val($(this).text());
		JQformSuccAllEmail.hide();
	});
	
//年月日       20151007
	var nowTime =new Date();
	var JQformYear = $("#JQreg  dl dd select[name='year']");
	var JQformMouth = $("#JQreg  dl dd select[name='month']");
	var JQformDay = $("#JQreg  dl dd select[name='day']");
	var dayA = [1, 3, 5, 7, 8, 10, 12];   //31天
	var dayB = [4, 6, 9, 11];             //30天
	
	for (var i=nowTime.getFullYear();i>=1950 ;i--) {     
		JQformYear.append(new Option(i, i));//注入年
	}
	for(var i=1;i<=12;i++){     
		JQformMouth.append(new Option(i, i));//注入月
	}
	JQformYear.on('change',selectDay);
	JQformMouth.on('change',selectDay);
	
	function selectDay(){		
		if(JQformYear.val()!='JQ' && JQformMouth.val()!='JQ'){ 
		//alert(typeof JQformMouth.val());
			JQformDay.html("<option value='JQ'>- 日 -</option>");//清理之前的注入
			var currentDay = 0;
			if(JQformMouth.val() == 2){
				if(JQformYear.val()%4 ==0 && JQformYear.val()%100!=0 ||JQformYear.val()%400 ==0){
					currentDay=29;
				}else{
					currentDay=28;
				}
			}else if($.inArray(parseInt(JQformMouth.val()),dayA) ==-1){  //说明不是31天，是30天   parseInt将字符串转换为整型
				currentDay = 30;
			}else{   //$.inArray(parseInt(JQformMouth.val()),dayB) ==-1
				currentDay = 31;
			}
			for(var i =1;i<=currentDay;i++){
				JQformDay.append(new Option(i,i));  //注入日
			}
		}else{
			JQformDay.html("<option value='JQ'>- 日 -</option>");
		}
	}
//备注
	var JQformInfoText=$('#JQreg  dl dd.textInfo');
	var textInfoIndex=140;   //总共能输入多少个字
	var JQformText= $('#JQreg dl dd textarea#JQformText');
	var JQfomrTextStrong=$('#JQreg dl dd.textInfo strong');
	JQformInfoText.eq(0).show();
	JQformInfoText.eq(1).hide();
	JQformText.on('keyup',checkJQformText).on('paste',function(){
		setTimeout(checkJQformText,33); //粘贴事件会在内容粘贴到文本框之前触发
	});
	
	$('#JQreg dl dd.textInfo span').on('click',function(){
		JQformText.val(JQformText.val().substring(0,textInfoIndex));
		checkJQformText();
	});
	function checkJQformText(){
		var num=textInfoIndex-(JQformText.val().length);  //还能输入num个字
		if(num>=0){
			JQformInfoText.eq(0).show();
			JQformInfoText.eq(1).hide()
			JQfomrTextStrong.html(num);
		}else{
			JQformInfoText.eq(0).hide();
			JQformInfoText.eq(1).show().children('strong').css('color','red')
			JQfomrTextStrong.html(Math.abs(num));
		}
	}
//必填项*提示
	$('#JQreg dl dd label[for="uaerName"]').append('<span style="color:red;">*</span>');
	$('#JQreg dl dd label[for="password"]').append('<span style="color:red;">*</span>');
	$('#JQreg dl dd label[for="repwd"]').append('<span style="color:red;">*</span>');
//表单提交
	$('#JQreg  dl dd input[type="button"]').on('click',function(){
 		var flag = false;
		if(checkUserName() && checkPwd(JQformPassword) &&checkRepwd()){
			flag = true;
		}
		//nameReg=true; jx另一种方法
		if(flag){
			$('#JQreg form').submit();
		}	
	});	
});