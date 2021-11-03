let currentActive = $('#service1_btn');
const service = $('#service');
console.log(currentActive);

$('#service1_btn').bind('click', function (event) {
	if (currentActive != $('#service1_btn')) {
		$(event.currentTarget).toggleClass('active');
		service.css(
			'background',
			'url(/assets/Stock_WebDev-min.jpeg) no-repeat center center/cover'
		);
		$('#service-content').html(`
			<div class='text-white text-center' id='service-content'>
				<h2 class='
					font-bold
					my-5
					text-xl
					border-b-8 border-primary
					pb-2
					uppercase'
			>Website Design</h2>
				<p class='text-lg mb-10'>
					We design fast intuitive websites customized for your business needs.
					Having a clean professional website allows users to find the
					information they want quickly and easily.
				</p>
				<p class='text-lg'>
					Depending on your requirements, we can build complex apps using modern
					frameworks or simple blog sites using WordPress. 
				</p>
			</div>
		`);
		currentActive.toggleClass('active');
		currentActive = $(event.currentTarget);
	}
});
$('#service2_btn').bind('click', function (event) {
	if (currentActive != $(event.currentTarget)) {
		$(event.currentTarget).toggleClass('active');
		service.css(
			'background',
			'url(/assets/Stock_SEO-min.jpeg) no-repeat center center/cover'
		);
		$('#service-content').html(`
			<div class='text-white text-center' id='service-content'>
				<h2 class='
					font-bold
					my-5
					text-xl
					border-b-8 border-primary
					pb-2
					uppercase'
			>Search Engine Optimization</h2>
				<p class='text-lg mb-10'>
					In today's world, most services are found online using Google or an equivalent search engine. It is critical that your website has good Search Engine Optimization.
				</p>
				<p class='text-lg'>
					Our Goal is the ensure that you rank well when compared to your local competitors. More traffic means more business.
				</p>
			</div>
		`);
		currentActive.toggleClass('active ');
		currentActive = $(event.currentTarget);
	}
});
$('#service3_btn').bind('click', function (event) {
	if (currentActive != $(event.currentTarget)) {
		$(event.currentTarget).toggleClass('active');
		service.css(
			'background',
			'url(/assets/Stock_Marketing-min.jpeg) no-repeat center center/cover'
		);
		$('#service-content').html(`
			<div class='text-white text-center' id='service-content'>
				<h2 class='
					font-bold
					my-5
					text-xl
					border-b-8 border-primary
					pb-2
					uppercase'
			>Marketing & Ad Campaigns</h2>
				<p class='text-lg mb-10'>
					We tailor marketing strategies to suit our customer's needs. Using a combination of social media and Google Ad Campaigns, we bolster the online presence of your company to generate more leads.
				</p>
				<p class='text-lg'>
					More leads are generated online than ever before. It is important to have an online presence in today's market.
				</p>
			</div>
		`);
		currentActive.toggleClass('active');
		currentActive = $(event.currentTarget);
	}
});
$('#service4_btn').bind('click', function (event) {
	if (currentActive != $(event.currentTarget)) {
		$(event.currentTarget).toggleClass('active');
		service.css(
			'background',
			'url(/assets/Stock_AppDev-min.jpeg) no-repeat center center/cover'
		);
		$('#service-content').html(`
			<div class='text-white text-center' id='service-content'>
				<h2 class='
				font-bold
				my-5
				text-xl
				border-b-8 border-primary
				pb-2
				uppercase'
			>App Development & CRM</h2>
				<p class='text-lg mb-10'>
					Sometimes companies face internal hurdles that can be solved with automation. We design apps to automate the mundane and get employees back to doing what they do best. 
				</p>
				<p class='text-lg'>
					Customer Relationship Management software helps companies manage their relationships with existing customers and new leads. When the data is streamlined, you can focus on the interaction.
				</p>
			</div>
		`);
		currentActive.toggleClass('active');
		currentActive = $(event.currentTarget);
	}
});
