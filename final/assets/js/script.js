import"../css/fonts/PT-Sans-Bold.eot";
import"../css/fonts/PT-Sans-Bold.svg";
import"../css/fonts/PT-Sans-Bold.ttf";
import"../css/fonts/PT-Sans-Bold.woff";
import"../css/fonts/PT-Sans-BoldItalic.eot";
import"../css/fonts/PT-Sans-BoldItalic.svg";
import"../css/fonts/PT-Sans-BoldItalic.ttf";
import"../css/fonts/PT-Sans-BoldItalic.woff";
import"../css/fonts/PT-Sans-Italic.eot";
import"../css/fonts/PT-Sans-Italic.svg";
import"../css/fonts/PT-Sans-Italic.ttf";
import"../css/fonts/PT-Sans-Italic.woff";
import"../css/fonts/PT-Sans.eot";
import"../css/fonts/PT-Sans.svg";
import"../css/fonts/PT-Sans.ttf";
import"../css/fonts/PT-Sans.woff";
import $ from 'jquery';
import '../css/bootstrap.min.css';
import '../css/style.css';
import bi from '../images/bird.jpg';
import sq from '../images/squirrel.jpg';

$('#bird').attr("src",bi);
$('#squirrel').attr("src",sq);

$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});
