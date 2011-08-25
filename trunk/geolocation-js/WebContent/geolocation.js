/*
 * 자바스크립트를 이용한 HTML5 Geolocation 구현체
 * 위치정보는 www.maxmind.com에서 제공
 * 
 * 작성자 : Mr. 하늘
 */

var isAleadyGeolocationMsgWinView = false;
if (!navigator.geolocation) {
	navigator.geolocation = {
		getCurrentPosition : function(successCallback, errorCallback /* Don't Use */) {
			if (!isAleadyGeolocationMsgWinView) {
				
				$div = $('<div><table width="100%"><tr><td>HTML5 Geolocation을 지원하지 않는 브라우저에서 위치에 대한 정보는 <a href="http://www.maxmind.com" target="_blank">www.maxmind.com</a>에서 제공받습니다.</td><td align="right"><a href="http://www.maxmind.com/app/javascript_city" target="_blank">자세히 알아보기</a> <span>X</span></td></tr></table></div>');
				$div.css({
					borderTop: '1px solid #b6bac0',
					borderBottom: '1px solid #b6bac0',
					backgroundColor: '#d1e0f5',
					fontFamily: 'Arial',
					fontSize: '14px',
					color: '#000',
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%'
				});
				$div.find('td').css({
					padding: '7px'
				});
				$div.find('a').css({
					color: '#000080'
				});
				$div.find('span').css({
					color: '#000080',
					cursor: 'pointer',
					border: '1px solid #b6bac0',
					backgroundColor: '#f2f7fc',
					padding: '0 5px',
					marginLeft: '10px'
				});
				$div.find('span').click(function(){
					$div.slideUp('slow', function() {
						$(this).remove();
					});
				});
				$div.hide();
				$('body').append($div);
				$div.slideDown('slow');
				
				isAleadyGeolocationMsgWinView = true;
			}
			successCallback({
				coords : {
					latitude : parseFloat(geoip_latitude()),
					longitude : parseFloat(geoip_longitude())
				}
			});
		}
	};
}