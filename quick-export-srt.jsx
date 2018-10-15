	//songz meng
	//export srt 
	//v0.01 


	(function es_subtitle(thisObj) {

		var es_str = {
			title: {
				en: "quick export srt",
				cn: "快捷导出字幕"
			},
			version: {
				en: " v0.01",
				cn: " v0.01"
			},
			xport: {
				en: "export",
				cn: "导出"
			},
			refresh: {
				en: "refresh",
				cn: "刷新"
			},
			website: {
				en: "https://github.com/msongz",
				cn: "https://github.com/msongz"
			},
			mail: {
				en: "songzmeng@gmail.com",
				cn: "msongz@qq.com"
			},
			time: {
				en: "time",
				cn: "时间"
			},
			content: {
				en: "content",
				cn: "内容"
			},
			helptip: {
				en: "HelpTip",
				cn: "帮助"
			},
			about: {
				en: "About",
				cn: "关于"
			},
			descript: {
				en: "Overview",
				cn: "概述"
			},
			usage: {
				en: "Usage",
				cn: "使用"
			},
			desContent: {
				en: "Copyright (c) 1987-2018 songz meng\\nAll rights reserved.\\ncontact: songzmeng@gmail.com\\n\\nThis script enable AE to export subtilte(.srt) file. Fully test on macOS 10.13.4, AE 15.0\\n\\nMain process is put a marker to the outPoint of each text layer you selected ",
				cn: "Copyright (c) 1987-2018 songz meng\\nAll rights reserved.\\n联系：@微型柠檬\\n\\n这个脚本允许AE导出字幕(.srt)文件. 在 macOS 10.13.4, AE 15.0 上充分测试"
			},
			useContent: {
				en: "1. select some text layers\\n2. run this script or press “refresh” button\\n3. press “export” button and select the location the file you store.\\n#Note:\\n・Hover your mouse on each control will shows a help tip.",
				cn: "1. 选中若干文字图层\\n2. 运行这个脚本或者按“刷新”按钮\\n3. 按“导出”按钮选择路径保存你的字幕文件\\n#注意:\\n・鼠标在每个控件上停留都会弹出帮助提示"
			},
			other: {
				en: "other scripts",
				cn: "其他脚本"
			},
			close: {
				en: "close",
				cn: "关闭"
			},
			srtXY: {
				en: "(in srt system, maximum width map to 384 and maximum height map to 288)",
				cn: "(srt系统中，将最大宽高映射为 384 和 288)"
			},
			er2dlayer: {
				en: "(⇀‸↼‶)\rplease select only one 2D layer",
				cn: "(⇀‸↼‶)\r请只选择一个 2D 图层"
			},
			noLayer: {
				en: "(⇀‸↼‶)\rno text layers selected",
				cn: "(⇀‸↼‶)\r没有选中文字图层"
			},
			textOnly: {
				en: "(⇀‸↼‶)\rplease select text layers only",
				cn: "(⇀‸↼‶)\r请只选中文字图层"
			},
			markOnly: {
				en: "(⇀‸↼‶)\rplease select layers with srt marker",
				cn: "(⇀‸↼‶)\r请选中带有 srt 标记的图层"
			},
			overlap: {
				en: "( ꒪⌓꒪)\rcheck the highlight layer",
				cn: "( ꒪⌓꒪)\r请检查选中的图层"
			},
			epHelp: {
				en: "export\rexport the list as srt file",
				cn: "导出\r将列表导出为srt文件"
			},
			rfHelp: {
				en: "refresh\radd/read marker of selected layers and send them to the list",
				cn: "刷新\r添加/读取所选图层的标记，并将内容添加到列表"
			},
			verticalHelp: {
				en: "checked will change {\\an} buttons behavior",
				cn: "勾选后会改变{\\an}按钮的方向"
			},
			vertical: {
				en: "vertical",
				cn: "纵向"
			},
			fadHelp: {
				en: "fade\rset subtitle fade-in and fade-out\ravailable require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "淡入淡出\r设置字幕淡入淡出的时间\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			posHelp: {
				en: "position\rset subtitle to a new position\ravailable require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "位置\r设定字幕新的位置\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			bordHelp: {
				en: "stroke\rset stroke width\ravailable require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "描边\r设置描边宽度\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			metriHelp: {
				en: "kerning\rset kerning between two words\ravailable require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "字间距\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			blurHelp: {
				en: "blur\rset blur level\ravailable require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "模糊\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			mvHelp: {
				en: "move(x1,y1,x2,y2,t1,t2)\rset subtitle move from (x1,y1) to (x2,y2) during t2-t1\ravailable require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "位移\r让字幕从(x1,y1)到(x2,y2)运动，历经 t2-t1\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			fsHelp: {
				en: "font size\rselect words in edit text, and click to quote\rif no words are being selected, it will quote the whole line",
				cn: "字号\r在编辑区域选中文字，然后点击设定字号"
			},
			uuHelp: {
				en: "underscore\rselect words in edit text, and click to quote\rif no words are being selected, it will quote the whole sentence",
				cn: "下划线\r在编辑区域选中文字，然后点击设定下划线"
			},
			sssHelp: {
				en: "strikethrough\rselect words in edit text, and click to quote\rif no words are being selected, it will quote the whole sentence",
				cn: "删除线\r在编辑区域选中文字，然后点击设定删除线"
			},
			iiHelp: {
				en: "italic\rselect words in edit text, and click to quote\rif no words are being selected, it will quote the whole sentence",
				cn: "斜体\r在编辑区域选中文字，然后点击设定斜体"
			},
			bbHelp: {
				en: "bold\rselect words in edit text, and click to quote\rif no words are being selected, it will quote the whole sentence",
				cn: "粗体\r在编辑区域选中文字，然后点击设定粗体"
			},
			fcHelp: {
				en: "font color\rselect words in edit text, and click to quote\rif no words are being selected, it will quote the whole sentence",
				cn: "字体颜色\r在编辑区域选中文字，然后点击设定颜色"
			},
			infoHelp: {
				en: "about",
				cn: "关于"
			},
			reselHelp: {
				en: "re-select the layers which you refresh last time",
				cn: "重选上次刷新的图层"
			},
			pickposHelp: {
				en: "show the coordinate of selected layer in srt world",
				cn: "显示所选图层在 srt 系统中的坐标"
			},
			killotherHelp: {
				en: "remove all of { } tags of selected items in the list",
				cn: "清空所选项目的所有 { } 标签"
			},
			killtagHelp: {
				en: "remove restrict range of < > tags of selected items in the list",
				cn: "清空所选项目在限制范围内的所有 < > 标签"
			},
			rmmarkHelp: {
				en: "clear the list\rremove srt marker of selected layers",
				cn: "清空列表\r清除选中图层的 srt 标记"
			},
			preciHelp: {
				en: "timecode (00:00:00,000) precision\r1 is best\r10 is better",
				cn: "时间码 (00:00:00,000) 的精确度\r1 最高\r10 也不错"
			},
			linenumHelp: {
				en: "restrict range for < > tags operation\r0 is for line all\r1 is for line 1\r2 is for line 2\rand so on",
				cn: "限制 < > 标签的操作范围\r0 代表全部有效\r1 代表只操作第 1 行\r2 代表只操作第 2 行\r如此类推"
			},
			olcheckHelp: {
				en: "check overlap layers when refresh",
				cn: "刷新时检查重叠图层"
			},
			x1Help: {
				en: "x1",
				cn: "x1"
			},
			x2Help: {
				en: "x2",
				cn: "x2"
			},
			y1Help: {
				en: "y1",
				cn: "y1"
			},
			y2Help: {
				en: "y2",
				cn: "y2"
			},
			moveinHelp: {
				en: "t1",
				cn: "t1"
			},
			moveoutHelp: {
				en: "t2",
				cn: "t2"
			},
			fcvalueHelp: {
				en: "change font color",
				cn: "改变字体颜色"
			},
			bHelp: {
				en: "bold start\radd \"<b>\" to system clipboard",
				cn: "粗体开始\r添加 \"<b>\" 到系统剪贴板"
			},
			bsHelp: {
				en: "bold stop\radd \"</b>\" to system clipboard",
				cn: "粗体结束\r添加 \"</b>\" 到系统剪贴板"
			},
			iHelp: {
				en: "italic start\radd \"<i>\" to system clipboard",
				cn: "斜体开始\r添加 \"<i>\" 到系统剪贴板"
			},
			isHelp: {
				en: "italic stop\radd \"</i>\" to system clipboard",
				cn: "斜体结束\r添加 \"</i>\" 到系统剪贴板"
			},
			uHelp: {
				en: "underscore start\radd \"<u>\" to system clipboard",
				cn: "下划线开始\r添加 \"<u>\" 到系统剪贴板"
			},
			usHelp: {
				en: "underscore stop\radd \"</u>\" to system clipboard",
				cn: "下划线结束\r添加 \"</u>\" 到系统剪贴板"
			},
			sHelp: {
				en: "strikethrough start\radd \"<s>\" to system clipboard",
				cn: "删除线开始\r添加 \"<s>\" 到系统剪贴板"
			},
			ssHelp: {
				en: "strikethrough stop\radd \"</s>\" to system clipboard",
				cn: "删除线结束\r添加 \"</s>\" 到系统剪贴板"
			},
			blHelp: {
				en: "{\\an1}\rplace subtitle to bottom left corner\rwhile {\\pos} added, it will transfer as anchor point at bottom left\rthe existing {\\pos} will be wiped up",
				cn: "{\\an1}\r将字幕放置到左下角\r当{\\pos}标签存在时，它会转换为左下角锚点"
			},
			bcHelp: {
				en: "{\\an2}\rplace subtitle to bottom (default)\rwhile {\\pos} added, it will transfer as anchor point at bottom\rthe existing {\\pos} will be wiped up",
				cn: "{\\an2}\r将字幕放置到底部（默认）\r当{\\pos}标签存在时，它会转换为底部锚点\r原有的{\\pos}标签会被清除"
			},
			brHelp: {
				en: "{\\an3}\rplace subtitle to bottom right corner\rwhile {\\pos} added, it will transfer as anchor point at bottom right\rthe existing {\\pos} will be wiped up",
				cn: "{\\an3}\r将字幕放置到右下角\r当{\\pos}标签存在时，它会转换为右下角锚点\r原有的{\\pos}标签会被清除"
			},
			mlHelp: {
				en: "{\\an4}\rplace subtitle to left\rwhile {\\pos} added, it will transfer as anchor point at left\rthe existing {\\pos} will be wiped up",
				cn: "{\\an4}\r将字幕放置到左侧\r当{\\pos}标签存在时，它会转换为左侧锚点\r原有的{\\pos}标签会被清除"
			},
			mcHelp: {
				en: "{\\an5}\rplace subtitle to center\rwhile {\\pos} added, it will transfer as anchor point at center\rthe existing {\\pos} will be wiped up",
				cn: "{\\an5}\r将字幕放置到中央\r当{\\pos}标签存在时，它会转换为中心锚点\r原有的{\\pos}标签会被清除"
			},
			mrHelp: {
				en: "{\\an6}\rplace subtitle to right\rwhile {\\pos} added, it will transfer as anchor point at right\rthe existing {\\pos} will be wiped up",
				cn: "{\\an6}\r将字幕放置到右侧\r当{\\pos}标签存在时，它会转换为右侧锚点\r原有的{\\pos}标签会被清除"
			},
			ulHelp: {
				en: "{\\an7}\rplace subtitle to upper left corner\rwhile {\\pos} added, it will transfer as anchor point at upper left\rthe existing {\\pos} will be wiped up",
				cn: "{\\an7}\r将字幕放置到左上角\r当{\\pos}标签存在时，它会转换为左上角锚点\r原有的{\\pos}标签会被清除"
			},
			ucHelp: {
				en: "{\\an8}\rplace subtitle to top\rwhile {\\pos} added, it will transfer as anchor point at top\rthe existing {\\pos} will be wiped up",
				cn: "{\\an8}\r将字幕放置到顶部\r当{\\pos}标签存在时，它会转换为顶部锚点\r原有的{\\pos}标签会被清除"
			},
			urHelp: {
				en: "{\\an9}\rplace subtitle to upper right corner\rwhile {\\pos} existed, it will transfer as anchor point at upper right\rthe existing {\\pos} will be wiped up",
				cn: "{\\an9}\r将字幕放置到右上角\r当{\\pos}标签存在时，它会转换为右上角锚点\r原有的{\\pos}标签会被清除"
			},
			writePermiss: {
				en: "(⇀‸↼‶)\rplease check the \"Allow Scripts to Write Files and Access Network\"",
				cn: "(⇀‸↼‶)\r请勾选\"允许脚本写入文件和访问网络\""
			},
			msHelp: {
				en: "millisecond",
				cn: "毫秒"
			},
			// posyHelp: {
			// 	en: "",
			// 	cn: ""
			// },
			// posyHelp: {
			// 	en: "",
			// 	cn: ""
			// },
			// posyHelp: {
			// 	en: "",
			// 	cn: ""
			// },
			saveDialog: {
				en: "select folder to save",
				cn: "选择保存路径"
			}
		};

		var pimg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00ÚIDATHÕVMhAþ&\r1ÉARl©Ð*ÁbJ«¥\'¥<	ÁsPP´èÉ«9­(Ø\')¤àA<)êÁ*ÄF(©¥éÁ¦xhb]yÝq6;³YY¥øeggÞßÌ|ï½0Î9TDhÌÀRl\x00Í!qs<ºÀiìQ1Ø\x00gµîp\fòX{­JI\'.dN:xÝ½,ÇÙà.|"Æu}¶Øt³ÌÂoSÂ,GVâé"ï7cßi¾©YNï¹¦Æ«ãQ©)êÐsÎÀ6S¿}·Òö mÕc,ËÉ*+?Z!5FEiÈÓ=«}yUÖå<áéñqp(±æCÏÑ^g`9íExb\rë÷ò6¹Åã;´Êr²º\'þ«¨ìb¥¸8éRòUsUÛ£,\nHÕÉ\bxH²ÞUycg GÊ#ëúXíËÙU²ZÝaÓÝª 98õ®Ã³5©VÊPºz¢jÛQ´®PWC_LÉÎÉo8´Ó,man¤oO<:ÔHÖ»*­²úÄ \bfnÆÐ»ìýd¡wé6ß½|£í=û´@"Tbò¡¢ÞÇTÕ"üÇúAZÔâÔ+x?Í¨ÃÀgçbc×-\ruð£,Ij¢¨	£&Æ\nLkÑ²5{3¶-(ígn!^ïq¥¾óÞ7+²Yçþ]9wBSÐItËéy}	!Ò4ñäl¸CÂÍ£fs+dÛrÄ×¯ßåàúuóc÷pþyT+à4Ó5<8faôÅ%~?ðå"1ùkç5ê0F!ÿÀÎÚ´/ÃÛ²#%MÍÕéV:VÓÉ¬¦	û6å@AÐ¿åÅtÚ¤xhLsýµ.ÿ_­\x00¿\x00u\\\x00\x00\x00\x00IEND®B`',
			cimg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00&IDATH\råVÍjSAþ¾TþXÚM)HWíÊ¤ÐGÈ(và¦]5 ØµÆ°âZ¨k%Û¸)èBIÚ¶è3çöÎÜ;5)úÃ½33ß9gÎs("pQÑwî\b¿¬¾1ïº0Ë¤¦T\bJ`«b&\b¶ÜÕ\b¡@PwÇã¹ñ-¬$â.ÈXloìÐ»Àk<Íåª«ÓltRÛ¤hÐ¥1\bEÛ"T!hzý%Xµ¾æºR<d\fVZ~Øq¯-üºÒr\bâ¦­¾à¬vrÙq¹·ìî*°Ø_óßHº\fZ¨î\bÚgÊì"Ñ³Ñøë9åæe,Ê=ª©	>ÒÎ$îYíÄ­æ2}¿\fg/°y~s2q¼øSæ3fóû­QJQqoPáûí`Dûüü±áÁ» ËåG;©Ë4¤\\8Af]+BðI¢Ö²@®ä3Aý_øD°}efÊößÆTVOhbmøùö^Ì\rµNÍwM@°ÞòG¼z8.I	¹$ø¶0Bi/öÞö6ÂÎgØ}­[kX÷Î\b½å#·Ä¯¨·p°¿g­`¼pz\\ÿäúgÿ(#s¾6$Ñ Øà4ØBH\\µÄî¯]Ô¹mýîÚ}zöYOÚ_ew\x00<µERëX\rÀëIèà?+\x00~%¶*~]T\x00\x00\x00\x00IEND®B`',
			dimg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00IDATHÅV=hAþæ\f\bzæN¬,ÔCDP!¹Â>iÓøÓÆ\bÚBnÎÆVð®5×¤N°0RØØDMÒ,QO8.ÄB¼ÙÝÙÙÝ»½|Ëãv7ó¾÷»\'\b&Jü.ZXÔ>k(­ÄuÄÚ\x00\b3\ru¤D OWoçÂ#@ÂÜ¨¨Go"iÑà{1³Mú]íkµ`Ý+\bA:yÇª0¦XBH9½ØùÀçË )æ\b³ey¼D:QÖZá×ä<¯Ç,»¢	`"!ê!J¹ýÌBp3ÇBÔ@,v(²®Á¶bzkåê{îO¦uµÁÅuóG[ÌîLtB2-ë¸	2Øy0±5þNö;w}) ÚÅ¤*ã5ïBÐ¤Îèº"­Ô¢	£}ã\rð@ï*@çQWÉo¾ýòAR¸GHv¿§/µ~v´¯÷÷Õ´36xkÞÐ5·Òk{¼¬_øÓÝzëÁÊmîåg_\ríÈá! åèc$Ë£`$Ö£À*56§Ø¬ç¿v¡	ýñO³:\\cD÷)?þ×5QY]®&êh5¦±1,O±Sk(÷ß¹­Ai)$6ú#c?f4¸éöË?\'\\æ#ã÷§W«¡fG ¼6Áßk{ÀÜ[`¯,.Eõ]g\nñ8.ó+Á=æqMÐLç½|ÚöÖÝÉûþy+ßéwPÜyîMçxn­¶ÅÁ,î¨Sa6´<uêï×ø~@=[)¹°7|iØ>u¿ÇPµûlèó>Õâ!/ZÍk0á"q4	\x00ÿÂà9½iS\x00\x00\x00\x00IEND®B`',
			eimg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00uIDATHåW½nAþ6$Qè I.Â=¼©ýðá	0KRóT¸MMÁRHrË}{;ë9ßî³ `­SögþvæØ±Á¹ûõhæíß÷®vgWXdd¼;É\\ÆÑÁíÖ¤"üqB?j³ër/à@8ÊõuvP¼×qI\nqÁFBôi\\D8)ÄíÖpnùWÃ©z®·sÀTcö è\'ïëàöÂ]ÇWiuDÓ¨ù³qp=÷çá\rãî~<;¯V.s½3õ~zýNlÄP¿_âeôw2]FBëW"¢tþ¤;{dëb³ ÕÕÌ}úß2wòöúCÕÙb±Îr×ÃÐ0¿ÜÄÐzÌt¡g\f1õÌ\f×	YÆJÌUÀõÎ4Ç\\Bh2\x00ñg%lyÛ³kréLWW»³è¼cÛÅfQñ~qilC0\n§+c;ÔáK<iDXq\fà=¯n÷ÿYbtÒÜet²ú¯(fÉ÷¶\x00Sb[àYª-äF+.	lf&:¿Ï/ðßüÇ¹î&dS;Þs¬*ì[V!«I(M*Ã=­4j\x00yMOkUÌló9göÏ$db2¥£¤ ­5`!kÞB­V4V²}8x¦MX«Ýw®?mÜGáª¯4àÓQ\r<|<[BáJûMg\fBeÖgË	ã¥ûÄ}¿ðÕ ¿AJÞº+×1ça~þöôùkÇº\x00¼åÿ¡=ðïíEÂÿ¬I\x00¸I÷Õrõ¸\x00\x00\x00\x00IEND®B`',
			fimg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00ÝIDATHåW;oAþÖ\rá\x00E\bF1!Ä¡@¢pøñ×i LÇ5ÔA§ %(5[\"ã\"â%-qBíDÈpÐ ï®ïÎwÇQp«õÍÍÎkgfgÖà~\f«IA`¾\x00Üj	èaaªPYU¿ò©/(áÄ¯·ÌO åêð@E\nÁÁtn¤\n+	ÌsÀ\n#^KRâ(¥rdoP¿qY<|D ¤q¬a½¹/Ð\x00¬9Ì!Ûósº§÷« z¯íÈ­è¨'á_S¯³dòE|ÃðÝ©írú;Î©®ìzíN×âkeÁoïzCÍO¸Ü\\íjmÐs~§Ùá\bÔH½gW2Micy{¸¡Å¬ ræ`ê3p?Ûãég¶%,:³9d:Û)ÈÞ­Ñ½^L'Ê¸/.E3K¦¼Åó	\rÑÞÏfª]|-þÃõ}avÕ`³9pýfÑâBr»gâL¬5ü]?Y;#í~±#{(æ`\"TôäQ8rnë:Ü$ÐùÐ\falXðEA-þXã<±¬þk¹\rªÝsmõñÆ¾zêLÝu¥Lp{`ÜJÔÞé®ú~iõÐ#ò1-¸°B¦´`ù««ÂáÓâY9Kh^¨.ßÃç¸_Y¡\\ \\gÜs¹0ÍìÂæØÆ±ËNLÁ4ÂÞMUWqÑgE9{ÃðDÛ(ÅyvvFª¶\x00ñd¸*\fÐomXwO·Hº;ówN¾:®«{;aa,×Ç`÷ì5pkt';pÄ±,~M?Ã·Ë¿åªæs¡'$l\\ïÎÇ#[ñQ'\bE]Íµ%B;Èa+NºZ'ç°+WÀú1×_÷3lÅ\x00ù¿îc#\x00^ð}ÛOø5	\x00\x00j}ÿ\x00\x00\x00\x00IEND®B`",
			gimg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00IDATHÅWMhAþF[ì6E¥XZD±	VO*DÁØzS0GéEzêI¯\n½x3GÒP(i"úCBÁÄ´³øäÍþ°ÝÙlh_vfö½7ï}ïg6à¥<ñé)÷CrÑI>Ý\rÂ:?:ÎÖI¼½ÐóP9JmÅnû÷<¹Ñ2Qo2ØJÞ½Éà³X|>ù(ÔzÆ\bü;N¤¶\\õ¿×êNÔî\b\b@}î:ÊX ¢(9Ö¨lÉx5î?$ñ³p-Àbcªëk3ÛÉó.DJ;Ð ãÎcPoÎ·Õ<já<\b&\b[*Lh÷>TDó_@Ò¡@-Þ°Bäæ\bmìäÚNd¹ÈxM(Çó©Vå­;­KáÍÉ§é2l{tÓïgÒ$IÁÜÕZi3,,ê8¿¶fáTe(ÉPÖ»n\x008H ApTzê,ñ~#ÓÉY(ÕY¨/©¬ÈãûÄ\f×.áÕå~|´;ÄøWàÜó¿È5È5f£RÊGQõèVHmìe µpàËÔ»7·D0\f§Dß&q\fúð]ß¡<¯=so.[ïûyâ».No<ÔfÿoßãõµØ1Hk^U©Q=ZÄáú-Ö4zµ²-ò§ÓáxÜ{@Ø>ò#|W~Xzc»«µÂnþÌ`Ølù½ÝH«\'q9y¨ü¯XªË­c42®¤ÖÒÔì5aå4ðzGêiß=k>ãA"­Ã]õjþóà&*\nê{rp/h.	\x00ÿ;¼Y\f\x00\x00\x00\x00IEND®B`',
			himg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00´IDATHåVMlLQþ®vª´£%­jMü&Ò¨Ä´DDÑXac,DÄÎÏÂBT5DÝ¢b"¢5ý¯×v&GÎ}ï¾¾÷î1R;¹óÞ;ç¿ïÜsîDçÂï¢®D9L\\±H>ãaùñx=PFG9&tP\'Wu,1õÈ¿Dþ8\b`+&ÔuÓcS`ª©}N¬Å¥A.`Fó.ïÃç®¹éLq~®y.®<{Ô´§æÏ¼Ñ	Ïpm·<"6 6³3rÅb`Ì¡Â>¹à~­­Úï·¹Ò¶4-c(¿"Ó°qùìS/nDIå[Î­$4=®*VögÈäÆK.Øyãùmn£kXÅÈ\'ºHjc¹+¤Î%MX~lh.¸|ì\r×KÊrwiÊWXF¦\']©V¿YäP²JÅïÆßIÕ_\rb8tR@T¥v¤Jæk>¸Á²Ú®C0T¨£¬¦ÿªôÂNKýÅy³HOýËr\në1¯h©$B½åj¡`"/¦IÞpaà²Ì[ðÕrÒcCÔ¶Nén³«½kózgßÇ»Jä_.ÌU¤´÷ÍúäÅñÓib.è`ÕÖÖÆçs1ÏªÇ±ãáv¹ÇTÃ?U\\0<ôªâÖÇ!0xÜÐºÊÆ1PÔdñkÿ]aLÊòdÆ¤¼Ì¬<N!ØÏ^®ÊÁÉ\\Ý\n,{ÄxÎ\bùîH?¼:ý ¯\b¤:kTcï­\x00ÔdïïGÆü¹@ín¸<Mî7¶sþû$R©Ò¡æ(lÔØr	íE®öEÀ[ÒT@/(¾àüBwi×VG}³>ÉãÍÛ/\nû|møcìÛîn%ÄKÌ¶Ó_Ü-»Ç¨K¶3rE»\rÝ^?¬}\fÇ\\W\fÂ>²uvåÉÎ?Øìjµé=Ðu÷Æ\\wU@<{!$Ä÷².¹/ÞW\\Çë*3¿í@ 	¬zÄK[³Ë1_â«É9ä#ëme{£¹·e*üÖ3ìKßúÙHÛ¹ä1fä=Æ;9Yeá°?ì<s@±¬"Öòf\rºùMu­gDø¸é.½i5qºa]jk0\\¸#3\bwrþ\b¤ç1ÿë\x00ðÏåtáG{Q\x00\x00\x00\x00IEND®B`',
			iimg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00¿IDATHåW=NÃ0þ\\ÁÄÎR\n{Sc¹ g¨{ö\x00H)YÛ&VVÄVD²ÛøÙNâ:Rø\"'©ã÷ë÷>«PFG½©$ÑþÒ1>C©=øu\x00áýà[:D@²ßSI­¿ÏÐ+zÝ1ÔÏpXn-(Ô\bYïèJRK ÕéØiæVëòÚ6&)²«ýÕÌù£ºgµ¡Ô&¢\nOÊ|¯­ñ¹O¢°fôÜßõÛûH;1æìý®fâ_øº^8*ÛínU\b¬YÝs¬ú GÞÚ}4ú¢<¬.¯÷gÛr´³/µøÏbuÜ\\øYòª[¸A]#6ÛeÊ'LGîU·cýàû¼½Æ²(¯cPÙëó:E6øªds'àòx;^âðEw¡ÎycUFøÐ´¢èÃG-Õ#«tÿÍT[à-ÎÑ°Ã\r(n×0?é92f¸áYMªfØs`l­Uµ»wiÃ+,u§E];¹Úñ£)ºëuwSqÿë\x00ð,<RÓ«Bð\x00\x00\x00\x00IEND®B`",
			wwmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x003IDATH\råV½KAÿÍB±9 â]li\nIpÿ­«pä/¸üÄ>b´b°QíÄF£&DH$ErÇ!OÞÌíÞÌÎÍ~d£Aòw»7ïkÞÇ¾ADÐQ\nßÅûºâH	á11^¾V}m³GëÑXm'IÙãó	ùÉ²GIÿ/<$²á4Âî6¯\"¥4¦Y!-tóR/£íÁ|.l¥íÌ°|ü(KºÙaè\"S(©HB))öwÄ×ñ%§ÜrSEÏô}ø´µmQÁôÉ	Î+¦#¡ú3ç0ï±ôö­à P¶o¯T­þÃí/cKØ}Öqñ­®7ï^¨2}®®çRæj¼Ü¤ÌÊ 1ÿ±× L­VÖö$x±òÀj@±óêó 4Z§\rÖö±À·kÎo¯IÒðÀÉÙXàùwF!ÏEPh×wîfñóá$íÎ¤1áhú\n~¶1³OøPÉo'S¿:úÑû\\ù×'JaÇ¸YÄÅøµ1tbÞåÈbV{j,öcoþ©[yÇÞJâ5@Cªcñmts\r,l¦[c¹ÔI³ôË« ß+`§öÆÚß3~zà@[\r¬ù®Á=÷Ô#e$~@ \fiQ¸_äo ×¬îÖ¼î`¿Mª©eëÿ:$\x00Ü\x00]0\n¼õÝ\x00\x00\x00\x00IEND®B`",
			qqmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00+IDATHíV;KAþV¨D\b\"ZJH!jBlcg#h)½v6Úê?°²Õ)Ó)6J\nâ#ÍíyÍí%'\nâsÌÍ{v¾=ADp®þ-Ò |)AcxÁ§ÒÄÍ\f¤	â½§¦Uñ1¼«Ëd»é0 l9¶à$¼ÅjÈâ]\ntiª3bkÄíÈë­\n(é!QV¼/³ýOçtuÈ¯ùÚsb[¨&WéFk,1UÛÒSbÓ­íëÑæ6Ùeax$ì/JØ%ëcT÷\\ÊLo±WN«,ìé!Q;%ÀVY»Ý¬Þ8)Rµ¿¯U¿§Ì¤%mWU_zë<Ä8Ìª· ÌvÁõçf¤àÛ +ùÚ¯ì.XêjÙÚLïÆ	tÕ\r·ÄiïÃÆ-ÀmË¹«Ð×v1Æ]jGîmBV*hREÄ­gÆ6ðÒ[5UCbäÁø½½)ì(+RÔË±<wã$^ûê¢{ÑXúñjqöbþ¸so²\bLÙýwâ>UP@²'P1T\baZ8è4©£Ídó |;d j\\Ù0[9ÆëÆ§ø\fÖ d[-$½'*)_NDm#eAV:sôP);ÐÀåç³RóÒc#«\x00B8ü6Ç®\x00B8TôÕ?³\x00|Z¾M±¤9\x00\x00\x00\x00IEND®B`",
			eemg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00YIDATHåV½kQÿÍ%ïÔp\\qÁ\"¸V.Ø,\\¬SJ$}Ò¥Iÿ `c,E¤ó«0vH¸CåÄhîC\"#óöönß~>Üh\f\f¼}3¿y3óf13üóÖô­ÜTµaáú[uH%Á³Í#gÁ0´¤¶{ciÃ Sûxmë acÄ\r¹Ø?!ç@=wXùÁáA,ª ¸¨l¤¹¼Þö\fþ¤kºXðdïmj F´[ZNU&Ó'Ãûsò	òLîêÅpåã&óÂ6¬æ¥u&CÖ\fo1>Wîú÷ºû%Ü;¹/¢þù9S´ÿ_ªG@V°Hb#©îO£ö@îV×¼{d%¦\nÂK×íQ¾W×T'JMµOïàR«ª	ë$N_}æüÞtHÖ¬=\fúa¯ÐÇùÎ1M(uþfjÁZÁ'*¾+üB÷ÄWl]«iÁj¤Í«\x00uó}£3â?»WÛÜÎB¼>ºÀªhgR?ß±L?j;~ÓÈÆ`åÆ\f>ÌþÆ³cxeCÞ Û]îóD÷x½ñ¸Ð\"Ú¥ûxqµ¥{x,VaqèÝN4jrc}ØVMØkQ|sÑn¦Û2´¤­hC;ë³2LÀ©îÕdï\ry9¼7;LÜiòª\n«\x00Cy§fá÷Ò\\7ìLÀ\x00³°ya\x00x #&±^\rà­î?\x00\x00\x00\x00IEND®B`",
			aamg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x001IDATHíV½KcAÿMHqA9µ8ü§ÚP®8úø¨w¥Ø¨p\\caüXØ\bwÚ\\u\n66EÐNÅÂ ~FD0j1²óÜ}ïï&¼ÌÎÌovfwf¡R(ÿM ¹"4÷ÑÄ Ék&î>ljv4Ñ.¤æaÃ¢t53Ì´n29Ká!Ï`Ä°ÝÂªÌÂSAÛë"\fÛªTrÑÈµÉ¹@ÅÏIí\\PXXÔÁ<ZßDx§çÓ]$K]iYPWk+±ÑþP2cü| `	/«Ðz.\nÃTÙÓ¸à¸nk²ýêué¼f@¦«cyÄõu.¶Tòßí!~¶³ÀWÆ]W\\¡³Ûq»rß²ýÿ®u=G3~~ºGôÊ+\röhÍT$è¤n	æAè	iÀ¢fpÚ5aVSú1T|ÂC_Ø¥ÐëÏ@a¡@QÿÀâ"hãøO\x00(F§ubH	vZR\x00J¡»Þªd#5ø\na]éJ¹\'åúçÉe¬Åd¸Üá×gF[Æ{àú\fc0Ú	Ôë÷ßqda`!¬µÑßD0çE\f­\x00ÍÃú)TwcúkÉ::\f4o¹GSëØöü_ÚèÊ¾ËÊñÕ¹o{ªâ§¨gÇóÆÀYõªHÑKÿ·Ì7\fà:tüv\x00\x00\x00\x00IEND®B`',
			ddmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00GIDATHíVÏOAþi¤cÚjÖèp2éÄA/Côè½cB#gèÀ¡bbÃANÀÅ6jÅ\b-bxffévº?¦K|IvwÞ{ßÛ7³ßbf¨8bâÒ°ÍÖ)éqñA ³ñaá:3ú·YX·áF=¦EEåH©z~¯AÁì\f0Ll¤rê»ZO]'é[Ïúl°hÚ±G+ Þ:]cpYr:Õ­cåÜoÿêhþ¤ÙÇús´Ù¶,ÚÈm;Í\"T,ìf÷¸6m±æI-Õw@~è'_ØJ¸\r\x00bA§ä]áê>º?ÞbpÁÙ'mC¬¢.HÕþêä	ÄË×FÚÅ,0T*Ñng-È$æ0}6¢µ\fP1ÞjMXü<§Þ7y;?ê«IZ§Ë7÷ðýÒxÝ'|µßzÊ¯¹kcÚË,TOo³6ÛÝEÆV×U>>>/åÄjÃ¾6Á0æBë±'·=#¥²þ?:4;Xvµ¾EÊ?a)S_®ä\b8lï¹ÈÛ®ÜÈ Â¨Ò±\nÀ±}Ä«$7ÇÜíÌ>°JÉFÿ6cî£Ú¹+NbA2rô»z'<î¼9ñ\b;É2FÜf1_çÛ3vù Á³wrÂ¼ü*=Ô\nZ	£:R>Xby_×Ô.N;Ä¢|½¼qXÿ#Qú(8Ìã¿,ú\\mE$\x00\x00\x00\x00IEND®B`",
			ssmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00&IDATHåW½JAþ6ØAH¢â¥ñ§2X	9}Á0uAAðÌ¤5Ia£\bbgçDJ\b2²{?¹ÍîÝes,ÙofgvvîÂ\bA¤¼9XIIË"h\fÿÕÛ`\'v_*4fð0µ«¥H¶#X WÇeæ\bv_îNÄÃûxK/)>© ¥oYÊæü8KX¶;-ùlå4K¤)2Þ×lgèXcµ<«\'6ñ£ix\fPðX8òR&ÚtðJ¶|áS¾*ÛÓZ=Ð­Eëgt7L\'Q¶æ¨Áv;NÕV¼gé,ÛÏôqY9"å¾ünÌn¬|ä¢¶	ÔØJ¼µ-µ4ùx,ÅVo\n1$iúl·§?%òS¾:<ÕÒC|ï×ØÂGº+.Á2\'2\rí[oU¢"Iä9	5ÏÐ¶0ëÑi¢^56öÂõªrm"`äXàÎöZÒr;62ók©þgì¶¼&.·\f2pQRYÁ&:Àü9<óø¯2§_bí¸·"u1yù¬H «(ÕØT»²8Xè"\n_ã:@6Î©c8¢¯)½ð9w½mõ%ÂeÏ¹#[&Êp[l ¾ÙwÊç·Å±Sÿ<]éáþm0#÷jVqk`$þÿzI\x00øÍà)\x00\x00\x00\x00IEND®B`',
			zzmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00[IDATHíV?hAÿ]Lã¿#*DHAÌ¤dºfwHp9àn&QÜ*àfW3*íX\\ÔI;)iKÖ&Ìxò®½/ßwwß}WvÐÜw÷þÝ{¿{ï!L)5%9Û6Qù@<7D:z§GcWIÊûéÐ)ánÖHA¢±0RºÙO¶ùIµ©!»cÛ´;Voî½TÎäZ°ÉûeµU{÷ð=_õÓÛÄ@¸È©9° °£S8ÁÉe¦åááñóÔ(Êg\nVf5XÁAlÃÃtû]¥i¬Í®ðï7§Ûhk°kXyBÁv¤CÁÎÈ?ª£;êÖ¤¢?5|ûbÝÄ	2vs­@PÅ¢ÀÞÊQ¥$²þÔ0aÝé+ò¿Já§Ì¥{'tÖãðÃgÇ\"ßk0hÞ£Eho%Fô 8ãeÂÚµA¨(Å\fÝ³$jI)øb¶'r{Èë×0÷\"1È\fù-[rtòÁ¯ÄA/³Ê½K«8%YiÂ½«\r7\rKÉrV +ÓVþ)^Ï»¹,qºA½'ò¾¥/z>èÐíè©~Ó fåÓi³ðÍ9 o|Ö·ûõ=¤û7	ôÑ®{, \n\x00¾Fj·Ôòâ:¦w®¨ãcØêx<ïÖp¦,U[´EÿäªaWnK*§æ	Ký¶Ç/ÿÂ+ùØÒî;bC-:¹d¼ñÍÛaè­þ;à\"'Âý¯r\x00\x00\x00\x00IEND®B`",
			ccmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00BIDATHíV¿KQþÞi»Óä@A¼&©R¤¼V$Üý­ï/0U*µT°I4ic&`J»Klâub(z»p22£»îÛ·÷öÁ\b!s<Ø7ßìüøæ!*9~VÇë¡-Äê)±À¸ÒÃWð5 Þl8úK.´ô\n¾zRP¤Ç·8ÅÓÁØ6c1\'bÆÅjëù\\í»á"tËQÁ6¡´"Ù-T_^\\Ê³÷)ÚÔDØ$Ñ³Ö/6ÑjÔ­£ÚÉéä}ÑÿÞ¡µ½îB¼:\bNóy7nNñÈÐ½ÞêSPs.	Ù\fsðx8}DQ}¦lß}©îï²tºmdö| ùLiUè×/»:ë»ùÚPKj\nÀ61ØMP®âçÏ³ú%×ßl\bÝAp\b5·Þ&T´áÓÙOímUÂÚì~ÆþãÕÔlßÐçÐõê»[äjÃxo¡À¯òW)a{èí\rÆýõv¦°³H¦¨ÿ]`Þ=<èò¿ÀbÒÄÚÓ¼·¸££ÉsÎ«(FQ pQØtY Ö2a$BÑ¨Èe¦âs0¶	Ø9h6^2½Ê§Ø9à0gíM|Jóç<ÇÂ¦íá-|ÇüG»qSJ@;½LÜººSÜä5% ë5àáýÂâ2°W~oµqMµÑÁ§Tu½JXX¾­9Oe9ÿÊY?+/%Úüçê¿"\x00®\x00¼çxhLé@\x00\x00\x00\x00IEND®B`',
			xxmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00pIDATHcüÿÿ?2`b@pFu°R\f-DÒÏÈÀ@87\nê8\x00þ3 ó	ZWHdüÉùìòì\r\b{`®c¸©ûAíÿ¡y§hïàu-Á Û«dkÍÿ·ôþ0>SÆª\b=ÁÞ\\ÿlpRA¤\fYë¿òüÁ¦nàlFÕÔ\f*uÀ)Â~rþÀ©k"AN  üã6u632060ì	@]ÎN¬³/`¸­ûK¼³¿òÀË°ÐJC¼9°ä¤Á1N3E~0WZL\n`!G´mc\x00å^øÏðÉàËm(¹ó©|48£N°ìÃåI*0¤v\nN\fRC¤åÄÆ±Ã® fª j\f\bª#)¨püÀÌÈÁ£R ¸Ð7_Îex¨ÊP= ûû\bRÙhÉ5j1m\x00\x00ÿO­jµf\x00\x00\x00\x00IEND®B`',
			posmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00)Ò\x00\x00\x00	pHYs\x00\x00\x00\x00?ã*L\x00\x00úIDATxí[Oh\\EþFC°\b²¶±eËºÒ$¢Òm#¤6`\n¹¸JÑC!´xöÐxàÅP°þa+¦=	¶ÚBVÙmB1Õ¦ítI)Ì8ó2ïíüvgÝtß÷}oÞÌùæï÷fVH)Ñ\nµ~$1lÎÒ¸öÏ÷/ëX¸uÐ'Çÿê/Ú¿Á¥ë^1 9bZ¿¹Ç}BB\nQP3þi¹ÅL-·­$ãF	OÕñØµDSö^azûMqòØ?Ñv¹þf3I7ü\\k©-6Èz'\"r·ÄÓAõ­Q±÷Nc_Â§ïH§O«s¾`ÎãQ~Å_Ó¤¼?¨¹ð*ã^jQÊ3»k¨ÜuÌõs.9L]&ñ¡!ÑÝ)\\êÃ7ûuJ$µA;\r¤6^3õ¡@_\\Hµ«éÉçð)þÊþæà¡õtÐ/%.½ú¢×ÄãÞûçGWÜé#þ\fEäÊÎû\fÆ­]gfÊ²1ë)sðfxé^¾*}*CÄí)éÜ/;þrhÚñé>^»_ê_âEDBn6¯úµÀqêþãI¶¼v1#Çü¹òt@ÉP`2¸7Q`2\f&CÉP`2º²k´}3»g2ÍÌÄcRÛc`2Øwm\x00g÷{:Â9àèg½¸ýÃ×TQvÓùÑP\rùf~'^N§=³»dª\b1}±ùÆ=O]lºí,:©sòÇ\n9§/æwôØÅª¦ÊhæÊâûýù£Ùï®®EéY#¯¢¾ÓzÕ¹²ó>¥NcQªÛ'®¿O4Zfó<ÞÐ·¿zCÓÀ´T&RÇÃÜcÊæÝ;É8í¤ÝÄ¼0ö}FT=å	Q_µG)[5fî!kîªÖðG7¶­6ÔOFUÕR¨?Ú(% \b©ùs]sý1L½Õ«½î~î\r'»ïLaÁWB¿Ç8fÅ=6U(0\nL¡Àd(0\n]57uºªº	,\f\x00C!ÀÂ`a\b°0X,\f@O»\b]-¼«=VNËü¯ßl\fÕö  r-ü»mé¹'$ä¥¶hëKéÇècÚüAî}~NoÚvùªë6ø¶!Ù±§ÜÄÏ/ÖQ<ÕÕÂü½uUý#,âM¬R¤'L@Îbûg\x00{¸ÛñfAÊ=Ê´&á±4Òä,\fûêºZåUk©mYjSu7.Új©\nk·f:ÏL9~u}À¤]\f*àBvÑîÕePeYì«w.«¸Ê@-)Î?óaÂ=5_N´¤'ÎÂwµµ©Vq¶â·ø¾*1¦þ7ÓAW²ÂÄH¶'Ùb¶u8ÿÓ!W<xÌíXxûÆ²)ÏpÇÂx[ÚgÝbÿ¶§+¹GÞçk'±³Ù\r÷îOpÈàòÐòú¾µ-KQÓµ¯Ål¤k®ÕØ¸]\fåþ¹µç²?â§}Oã»×{±m®ÕîêzKëcñ\f0zúö»*û®\r¦È«ØV\"ÀÂ`a\b°0X,\f\x00C!ÀÂ`a\b°0>\x00øÂhÄÅÅ£°\x00\x00\x00\x00IEND®B`",
			fadmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00)Ò\x00\x00\x00	pHYs\x00\x00\x00\x00?ã*L\x00\x00ðIDATxí[Kh\\UþUiÑÅd£±Öv|D\b4¶a]\b­t»H,4Dp7ËvS)¸h¡fp!L]¥0ºìC!ÁÆfÑ¤)Q§dH(ürÎÜ{sî½ç¿I:ÿ÷ÞóºßùÎëóQD4¼£ûTÅ»ïÌó_o4M,MÜw ôynÒ<ºOúºË¥ë]1ßCK¼SP&!þ.QDÐ-r/Ùµ·=¿üºA«>ª~ÝX~äkÔ×zC\r»þÈ»Îé{ª¾ñTüÏZñÃ½iÀ~NrX(Oçn$¹5êºR´®°Lv:õøàºúlÞî|§ª:fÐnÞô+û÷Ý!£ð¶&ßy5q_byßÙÀ½cMIÉæí«w_	O6ÅHwç\bÅ®Òìw(®\rÚÝ@×Æk!³2X2jþäúæ³«)¨þúcÓBMºÂÍäóå\f©µ·8ºFh,\f6ôCc±0o²WiqBa¿\foØÓG8G¤~bË Ff*2^H$óó¯P²2O`ûE±_RÞ1\\2dÆëÎDí:ÇùÎ|e:à d8\bÒ8\bBá d8\b½OF=¸mÖ7CÓÎðÖº¨Äeêí¨ÇÂÕõ	R³ã\nªàLèü j¥kÌZTvÅÈ7Qü/%o=öwöÕN`mágy^bÉ\n­B6\\icÕä[ê02ûÔæüLÁeÍk]¸ê#P+Ï»÷$Ua>ò°tøJ2Qäç7YÜ9ÕÃo<ãÔ7à¯Î+E`os+¡§Â\x00\x004âÅpæÆ\fÏ¯¯îMU&PçÆØf2"þo4òìV&¡ÍðdtrTm{Ôl?»ìAü\'û7s5à ªþ-\x00ÍWbRèOëþªíG [jØqB¨}ñ²WÉ?8ÃÙ.ºPÆÒá,ôy*\\¸,U8\bBá d8\b=57õzªz	"\f\bÃ@a Â0a0\fD"\fÁy(¨,¿6ûþ»F¥_Üªù  X,3Þ¿;C \\dß)ü6°ÊxG°r}®eÙ0OÉ#Wzs¤Ëæ{þbf¾ì½3¢>Iî¿DoÞß;Öäl-sVjmoa·#6\bº¿-cèLÿä gbÏPû×Çø×¬´¥¨mµ¸ïn\ncþ¤¤¯¼n-Ó!L´-i»m[í&=Wµîýøí	³üö²±$jîº\fº,ëýÍtîy×/¨ØÊÒº\x00\bå3©vK©v$>T«Í ÞÁÚ¬-\'KÁ*ÆÝ<½Ñ^t\nµdFOÛ-¨Ö0ºÅû¼uk!L$Û|úC yípè÷ggýZ-u0YöæÐ!	}\nà÷8êYêóÙ§[Sv«·yÌ>%Ð´)O2+ÿdÿZp8#çtý<\\lºN8üár?ðèµ~õÝÀm¬ÆÕÏ_ÂËy+p÷¡9>¾¶#?=Dÿ££Y9¬0\fD"\f\bÃ@a Â0a0\fD"\x00þJáI;\\£\x00\x00\x00\x00IEND®B`',
			bordmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00)Ò\x00\x00\x00	pHYs\x00\x00\x00\x00?ã*L\x00\x00lIDATxí[Oh\\EÿÆ?@¡ÆX5.þiaÍÖ °<BôÐ\be\r¨ z\bx°¹¤zh!½D\bIÁÐêiF(xIBBêaíMf±lV>Ù·³³óí{¾Ôwø~aÞ?ßûæ7ÿß7O \"á®Ðñ' ²ÚÇ÷×ÃeJ*n;@èÕ~\núPÞßáÒ%ÌgÀ&qDúP!wH¥R?-ÙvCª!Ô¸$ÛÛþ?A²n@7t*CP_:m Õ+Ø¬É Ý¬ðº|ÿDA|6Z}vzRÚí]ÅÌdÓ$\nWk±-mXÈ~×[oÍ¢é;©ìY-ÎÂË-x>+ Ú!SÚ³e<Îz5¯[£8Ôè]\x00Èèà	^ GÚ_*ëÞÓþ/µß®ý¬\nª£=48Ýºb¸ÙïØí8ÛxÍÊì'X\n¤2b¶oW<kV{°ÉSYÁ§ô}V¼7bõÑ«ÞÄÞÑy±»¤Vû+×£õ\b¨¨h>kOÉ|fJQa¿ölÙÓíêK¼>ß}7±³ø§¤f	kö-yÏF!àïõ¥CÏlÝº9½6Ì\x00ÂaH?£>bÅ\r8ñ9W¶I_àõCg2?4]5!Õ¦fx;ãËÓV+C{V+C¡ÀÊP`e($_q5}EíoNBuï3Ð¬pý¡.ØooP\\Ü Ú¼¼ç£%TgýL¯ðó{X£½ßñ¨÷cGßÈ\fã'Ð·M8ö÷='¬T¡­RÈîR´M¶ÔÁ±KNT/\x00lX5éìg}/Ólø\f \bX9ÿJ[ðFÕ¤4?v\r¡pøSÂ9@°X²7sf7grQq¿=wb§¾0\n°ÒÐRvlj¨DúáwËí-<ôgK(3;ï¸u¯¯µ¡G¡¼'=ÖÉ&Ú\f­ìQµU%÷Ï§±æ¬ûÓxsòÙnä°Ö¹Ó¼2¦FüÀ¹«È¥3.f&¡p¸/Ve¤L,Ï[\n¬\fV+C¡ÀÊPHÔÜ$$ª&\x00C!ÀÄ`b\b01L\f&\x00Càf3\biXÊ|¨Zo\\ÀÔò·wFÕæ @tÁRfTezv~gýKi÷éàÓ­>eÂµL{²\x00íéë-q®\fÍ.[ß±3M}ÊÞl\rÃx¥Ô'}²\r­7¶÷©ÂãÁ_ìÂ_*¢¾û£ÊNÌ?÷ß\nî?}ÿé\b¦Ôç¿¶ÐCN|Þ±óYÇ#SÚå-Ë	ùÃ\\¹ÆÞv­vÑÚ\\×;ÊªIö/``êñ8®$¯^m2×)Û§­w9s$ÓÊãÊ1>Ö½O%Qê.Ë Ë²ÞQ¾ý®´Ö¹­ºÐrà\"ÀéÁ°Ý:ë2^¾Ý´Õ`?¾æZ¥¡ÿ©É¹æ7<	ç^ûWYedYdÂaË*÷Ý[Á@æ1âù_mß\rjÔm1:M£·äOYáS[lñFoÙZÛªï>+j^ Ïo[»§kL»!é\nÖ¯@äìfçÖµÑu@	od½=bÖ:WÃé:i®nºnpøÃç\"/ððàJ8¾«z`ú{ÕxtH{g\x00^½°/üx\r:þx1ªÆl% À{%L\f&\x00C!ÀÄ`b\b01L\f&\x00ã\x00ücÄ®>/\rx\x00\x00\x00\x00IEND®B`",
			fspmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00)Ò\x00\x00\x00	pHYs\x00\x00\x00\x00?ã*L\x00\x00IDATxí[_hEþFTª\nJ¥ijl¢\\^Z,ÄzÐB@,>¨/>\\ Ò7!õÅö¥¥ b!\bÍy)H^T|H±EÛ'SèË)´*¶ôlëÿÁÈÌÍìÍÍÍowÍnâ)¿oYvfvæ·ß~óoçÏ\n)%pGbÕ$æ5!í¶´þÖM	)\x00¨jÿÉÈÀÚ¾]g	1lÓ×mhUÄ5ù/¯[·ö?!¥uw¢¹=íß5$ÎÙüðº{ÚõpóJëuè	.í(A¢©iè(­y¥ót`¹0\n×÷*}ûBáÿã\\ËåÕraÃFÖÊ[)UÃIÝ'\bï~{öá®ßTëÜ«¥²-=¾dkmTetLhÿõê?,ckµc¤Ç\\ÆLQûjÉM$º©fj6¸ît²Üí<[{ÍdVLBº¯ÛÙ]ËâÕ³-ÕN@DObZõ5øæ¤Õþ/×R»}¾ÞýÓÂ«£äø7z=@«ü°\f}U¦úÊl#rzÄëÄd 1eÜNøòÛNÑv?xæ»DBÉÊTú®hBÃ2ÓNìºÕq#Weì÷¶&ÊXß)ëôgöþ»\nL¡Àµ¡Àd(0\nL¡ðß\"#®n9¥Ç={¢0ÐÄ\\0ý±R\\Øýg*6Ù#³úc\\\r[ÌG÷ýþOJ«ã¿r¦þÒ³¡£ï5Ç@;ßG¦¿ºùe÷eâÎØl¦17üºg§<+-QÍ³ #>rù¼¾þ²áþÀôiúl²ã%?	)cÜ3:æGã'5fJ£N|>x¤q½·þ,ã\x005ø	Ü«F®ÑOïBñãØG%*©ãL±-Ø7¼25¬m,ì¸©ÌD?ñãcÆû\x00­{Ô,òFjµøgw~®¯÷ÔëÙIßn	Víkd®Ú:Ryðm|»ý4qÛÓ&!1&.U(0\nL¡Àd(0\nÕ7u:*:	,\f\x00C!ÀÂ`a\b°0X,\fÀyÝ|âîßË²÷â;y\r>·Ú¿Ë÷½¨=O]8!!çr1¼ÔÙTµ\rËNÛ30MìlV³G)ë³£Ù\\;½l¶s­tføOCÇ°»÷ìùÙK·ñÃ£(îF¹©<q2æ$¾Ù¹¬v°ÇeÌÚcwåw7¡l_jÞ2ÌDà^É]k4[ cK^ª1;Ó.Ù¬0º¤(2>jªnûÕþ¶äö«PÅ¼¬®Üû EOiÂ*ÿxõãå¡ªâ¡ääWN´,]Æ	ÛO&¿ÄLJ×tÛ3T[£Ú³6kÊPÔ0 py°Wb)F¸4ÿxñW7]af|ý.ÝÎ4×k[Ê%¶Ð¹âîÚvb}ïM\x00]:ðVpiûzq6	µq¢(à.¬êµæ!\x00%'¬èý¸UBVÝDø~ó^n]äoüÌÔÂsÑFzP!ãúÝµªJ)6|¬Z±}sO÷·ÂO¿©Ò:\\éÎjR¡æ¸«1ñèkìyíÝ¿°ñúW²gaOV¼J@ÇJX,\f\x00C!ÀÂ`a\b°0X,\f&\x00¢¶>ê\n¯`\x00\x00\x00\x00IEND®B`",
			bemg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00)Ò\x00\x00\x00	pHYs\x00\x00\x00\x00?ã*L\x00\x00·IDATxí[QhEþFÅ¦¨Ð­¹¤^«G®(>h#äAA¨\bñ¥\n>Ò*õAH}IûRô­/ÉWAl! ôEk°½ª/^hj\\i	ÉAáÙ»Û?»Ûî¦§üß2·{³ÿþóï7;3ûÏ?«\bQx R\";!5¢ È¤wf)T\b_>K à-¼0Ûºxcï®§ÉT{,Ë¼¦ïÜ°@[Ucó/Ôd¦VÚýW¤.ï+«g`ôöüb]ýðÚJ¨&ÍQgÂÑÏ	ôok1ç^ùB¯	Ë4'*ÅrW^5?ÉÉÿk-[KÅQ²Jl£Ë¥DA¼c­lÝãÉâ¢-Y<ãíPç,*!ïÂþó]×¶èÝDÍ&Ýùù±ºr¡ùWfÖ-ÈcÔ:í4Z-Æd	1C\"cÔÏ6´[£ aLìâîÛêÉO\"Á½¨uõÜµÁPa&;â-òX¤\\ä[f¨!§¸q*0Æ¾Ì~c÷3îåÖ»±}5AwÁL±ìa¹Ã(·MeÆ-¬}uâFë.ùÊpÝS¬Å-Cb\f1´&b\f1ÃAá Æpøo£æ^PI-Õ´Ï¤ ÆÖ×þÕÍm·YûüÐir/ØÎ-ôtbfÐÂRüj:÷ðü,h`>Ü=TþÿÙ§ÿ±G9ÄD¼àÒôq\x00F,»\x00Ýÿ±òØu³_ÚyTAmeN¬*r_{êwÏaÓÎZ'Yòº	¤4«j$½júàxsmÇ[Ôõ9styø0¾}·umZÌì:æÊVAØåç´¹ÃÕüëé»·Öµõªj\fb¬«©\\¬+A%3f~o#ïld\\íô'2Îü§øã¹âÉÙ-Iô«ÂAá Æpc81Ä=56õzªz	B\f!Ã@a Ä0b\b1\fB\f!ÁCY)VP93\rõ8nThèÒg©è]Ø3ÕGúðÄÕØvý+ÝLCoÌÆ¾E¿¼¸Z qoâ|ÝPÄo=Ð{àb¢e\\IRúMI/W/}×üx¿Mkkë^¿nÆåæ¿éaëèïÙô1·lpkô\fPøñkÚ~%ß!Q\f¾yk¦;a?ë8?åÎÓ¦Õ>¼wb±MÛBþÑÔï!µ&¤ËÉcRuÒMP oý§·ÚØÛ>és<÷?(«\fBF:Ô¤Ëýi¢ðQªHbü~åÔ .BÌÍòó,ìæéÊ´»~µ7i~Ü6j~)ÌXR'QV¦ß\rÊß{I4gÊxû<áÊÎ³¦ì¡µ\r!&ôÉÑFW§©M\rÛL¨×#\ndþÞq#«'%;btPÔïg®Öï\r×:}ÿêJ÷£ôç&LÈ[÷ú©IÚÐm£S÷aúÉ±{ÚI¢\fÄWb Ä0b\b1\fB\f!Ã@a Ä0b\b1a\x00ð/u\r!ìA.¡\x00\x00\x00\x00IEND®B`",
			movemg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x00\x00)Ò\x00\x00\x00	pHYs\x00\x00\x00\x00?ã*L\x00\x00$IDATxí[Oh\\EÿFCµÉ¶X£²%®´	h¡vÛÒ{ÈAh/Â"è¡\rc¡º"x@Øi"¸µ\r$Ø*kRJS5ínhHCKáyùvv¾Ý·Û¸Ê÷{<Þy3ßüÞïÍùf"B+<Ò2E¢ÀpB¬;ò&´°k¥öÑ%ÌØk>º?|	õuß®Å4Ô\x00 Ó÷öÖáa»A@¥@¥°j2u¡öïÒß&nF?mdHÝzz\rX¦6¯@¡ö±Çl\\Î^0½óút|ÝkM¶%í¥áf\'Ìf\'éóÿñWKäÕa#F6ÚZì¿­Þõ½u\'ª,7¶%øü}´í;î¹¹îFty×5)qw\n×q9ÛÒÏ5<Ìî«Âw!¥ÇH7N2cè0eRß5xÍ;¡?ñnAªýI¬ÓNõ×Bf#!d8°dÔ7Çî©ON&ÚÔÌàóîYT¦¯zh3ìF¡d\bHÓzC&ÊFVéðQ#ruÏ2RÈh·×b4JÖÂcÞZvi\\öòËyxuC*ÓLMT@B²!\rµLvÒ¨sì`¦NO7ÂÃ©A»2p2\fiM\f!ÃAÈp2\fî\'£ç5f~3·2ÉÂÔW£hæc zcC×àÜà£Â~ã_léßf³ýþÂÈjh"gÒÖléÎØÝW\r=oPF57Ûþ¾O|\rúGOÅ^Ë\nÔñMè³¤@SÊÆM(Pf\fík»z³ª©2¹ñýöâq7K$37)s3Å1r¥W§X7»ºç§Ncyo¼öm¼ùaêQµ§.ë¢+yirv÷KzçëGahà©ÅÇã×=\rm­;*tj\bS^ØL©íøÓ[a¡<x,@GWRB®ÙªMsÔÜÿõÌ½öÉ:µLÙXÜ±[³[<L4ù/¾(m³sO¦*\f!ÃAÈp2\f®º	]õº	"\f\bÃ@a Â0a0\fD"\fAO»¨½0ýÀ¶®ÁÌ¯ßnÕö @õÃ\\vÜdzáâI¼Ü¶VJÝÒ­ÝôÒp¢+»zKå«ïÛàÛ0vÇ[¼ÿå5nm»kÑÃÖÅa¡³³>fòµe|éÇ­¹2O¼YÏ6áÅiÏWjÕ<ë¼cä,:ó^|\nêÿå£Ï²ËXOM_iwÜx\f>~{¹£wl©üRß©Ny][ªÛïØ¯âïß\nìç,°öKMxa½³Bâr^¯*ã]"Û:M8â¿^r{GÍ;èwYê[{è¦T×tÚ¥xíùÂ Py§°S&q´	û¼äUwDüõ¦ZÍÙ³IÅk«\b£ú3¾á©«16O]±q¹ÀW\b¯BÀNÊ9&õ_S#Þß½¹bßgxc:_½Ïzfè`\'ÂàºÇÔ?ÊÏªß4}OlÈåÒ3C+t¾ñ©n¿ð_®uß¸^?þ¼ÞÛ;á|ú\'øùÐsðý[àÙ:ûMæ;0ræ>8?}×ã/^2Wb Â0a0\fD"\f\bÃ@a Â0a0!\x00À?¾¬Ö3±)t\r\x00\x00\x00\x00IEND®B`',
			fsmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°\'Ä­\x00\x00¶IDATxí]=ÛFMÊagØ®Tä Is]ÉR9ÓÈMR«pmÝÕgÀ@þ	*RE¤I`¶S&8×v\fÈ@Ð5\fµK\rK¤tÂ~ HíowËÑÆZKmñIë}Îdþ¹¹Î¶d¬XÌÌI9,?¡MUsgÕþìµßßµB\'ÖÑº>dØ\\_óEE²ù²ÌÂ-¥yÈ«ÛÃlÍ"^Ýîºù .È>Tk§VØ\n9^!ÜáûÎÜÇ22±FÓ5ÞæyãÉ×µG²48[|CvÛ±kÔ¼¸4;ÖÊ·ÙÎI[àÖW\bG!(\\e!Ù¶¸{æ§<!ÂðX:óÓkóýËb¸¼û¤×\'Ü¨gÝ¨w.~ËÑ©ÛÎ9»fñß¼·tÿE>2n¹ÿÂr¤<ÛOÄ}üi04\\ÓüßÞX\nñ5\x00VÞ?É0Æ£ò±r\f¥¶@¤@D@D@D>"ÙÈÅÝ³ü73A\rö-aÈ,§ÿå»ËÂÓÌÑÙËÛël´yÚ¹rSªE0Åù¹Üx.Ýþr;ÍÊ.ÄþTLÓ¦n:·ôåäO^y^ÈçÃÓÀE¤ø3pBÎÀß]XL-OJNJÆùýé\nû2,ÏÿúäC^ÁÁ41®HHhû\f:#Ô"2Óö\'U¬Ùm¹0@Íý|~#PKDÚw}¨þúòQÝ±p¯\r ¢\r ¢\r ¢\r ¢\rÙµD´D´D´D´D´D´D´D´D´¡ÿDØ^Çv»BØÆuí O+Ø~hÈ6JËÿu®tØi±r.uÂ²4jô/JaZ«çeÖèß;¬UQÕ³7d&nÿ"0rÎoWnf\'ï\r¤þ¿ª©4ºFÖ8§v¦·*"6pLK°$$"­ÀÈ4°!¦"¼±!´LD¥ÝßC"b"N"´Ðdzy©LiS$òîúÃ:uY¢½È¹¸Tø [p¥³v[;{4!\'DA9+C)ÙÙ¨$R ó|xÖ¤ºÊ{Î:µDlÛöQÉì°ùãi¼6666666666ôfÎÞôæÊê 2@e Ê\x00A(Q\b¢\fD 2@e Ê\x00A(Q\b¢\fD 2@eè,Hæ8ö÷Wv¦#âeÿpÔ¾sºx:dn$Â.t\'	|b\n¯W<·ÅÖÏ&ÿîA¼ÒÏf~°sbG<®ïÃuÔáMÝðëÆnUágz(îQ©­v[»@6[åÎR~í ÌAz|-+âý«hÓªü1¯±J¾xõ.t²ÐáQ.ÞQò¢"¾Ô2!L7!Ø3xUn(þ­³øÄï\n_AË+«æXµ]aPcm}Z%bä8ÓàKnJþìäÉuÔAÊAÝ~ýû¯ôæÖÞ»¤/^n#þýèÁoÒêÚ½¯+%û-=&¢÷D4"¢s"ZÖ|ÃgîçcKÖDèBüþ#z,®Õµ\'Yq]ypr]¾¹5Êê¶\nûÈîÝ¿ªKß	tM[H©©i!r¶è²läJrI¯bi?xÅ	î´Ü]ÐÀW`¤Kñg,÷Ã[¯äd×±Ü«ÏÇ>møÁ;,G!¬IÅ9KeÉ;¬=ôÖùùÞ¥j-k&\f×IÇ[^Û\'é¾\x00N(Q\b¢\fD 2@e Ê\x00A(Q\b¢\fD 2@e Ê\x00A(Q\b¢	Dô\\%îd>\x00\x00\x00\x00IEND®B`',
			fcmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°\'Ä­\x00\x00IDATxí]1o7~,2RÆdp¡Á]jÃ@Òt.Ú;åP³¸\'ï\nMº¨@îÔ5Òd«]b lÙ\f8`ñhòÌ£È)Éîëåûïx<>¾÷÷îÝ;+­5ââ#Zzë­kM&¤¯S~¹5$MfíõÚÉe¹65²þÒý3Óx²(6D±6@ô´¿G:þII½õau­»ÏtîùQò°Ð(,ÅbW"\b¹!j²½§>\'s(RaEEjk V®Hm¹¶\fj²-¨\fbíf»jËNíl3²åÝjýû\'z©¤8å	ñ!r]BÔï´z{÷\\^gJÊÕ·iu´yQ8Wg²Ð·ò¶uà{C¿l¦Ï´o\\T~op¡×Hm:\bÙ©¼\x00¾g!Oû{5çÏ\bzþ _â\f¦~ôæÎ¹9B äcr##þ&p#Ö""Ò\x00E¤HC»1O!ßÞ=¯¶I=b?Jê­ºüä2å»ÍÔ}ñU¿æ·ùð½`]#~:yª®ÓØUxî/?¬á=\ríÚ\'¡Ú®ó2µûsÚîVû_¯¾yþá\fßsìãZ¯#Ú>ºþâ#çW¦éúuã\\üfhÿ&ÛÚê#s?Ùè¡/Ú¤S$ð²\'¾ì÷Be<ÆBÖº#Ñ¶adF¡9Ø«þÑÑ»+	ªIæi"Ò\x00E¤HCkÁÌ.\rPD 4@i"Ò\x00E¤H("\rPDZC<Ú¼àx]µMê47ÎW\nçfÞ!lïEw&#Vq´hËíd½9éÙ\nêæÖã72ÑªUCØÍÅøÂ@¦óm°Ó<OÎºÐÜ0ð5´í^¬Í½¥¡":x#w)«)âÕ{ëAÜpÔÐ¶L*\fK4EdÈoíÔr:v}^T8ÚvÍòµìúþûôó7?Ð§ï~ûèñ3EªsüÒÀ½9ã²ë­ÿAzÎz¿´­?;¡¯ÿ¹m6~ßü ×_ÜöÄ>#óBË=7N":\fcáídÛML$ÃÓ2oî\nK?Ð7WÒQEtC,[2©}x/\rPD 4@i"Ò\x00E¤H("\rPDZã³·­9³Ú"\f D@0a\x00!Â\x00B\b\b"\f D@0a\x00!Â\x00B\b\b"\f D\bQ/7vý±hRÝëø\båÿæc/7vºÙÀé#nÅ)$®ÁÉf^¶C¯âì$·FÙWù/soåY^ÚVN¢]vZÛmÅ6cÛEò²S^¢D¸  ÄIA6}, "+3±À`£U|Ä-¶ËÃs¿Lb""BFµØ}§ýÃ1²!¦F}-ÓïU³0pq_õÿ]¡û®á9H£ÖVÎe0u(ÏêÃÇÆú´(1µIÝ$¾ïìÓ/ÛL2¨\'þôãm:^6$þðNÃ$ÓëÆ«TûÆVÇkSc;¶¡Ûmü¾³ol3©/qÙr#$ú¿ý³*sGGÎÂ¬cçõaÑ~¯j?IÅqwZ¶ôÕPÏéàÀæqÏÜ%¹ã¸¦¶ìÇ³®^Ã%bÇÊ,Ú%Ùªî°\n\'ô,Bf	nyñKØËÝúÜòê6%H·xt"\f D@0a\x00!Â\x00B\b\b"\f D@0a\x00!Â\x00B\b\b"\f D@0I ¢Ú\b«Tq62\x00\x00\x00\x00IEND®B`',
			bs1mg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°'Ä­\x00\x00-IDATxí?OÛ@ÆÏUçJlî\rCéBÕNaêV$º0Ñ9[f¾_\f­Ô©\"m·\"QU©¨ÂrÕëøÌÙç?±}uÜçYI°÷?vÎç7¯	´Öª**¯ÑÑ¦ÿôÖßT¨`_)5VãÕ?ê÷£_úÙ§ñB²ÉíI}yÑO¼¢uzúQyCTÒ¹§á³\n¶ìªhGM¬áìÇ;S¾ÔÎ¼Z;d6k­£°*µYl9Æìc*ê\x00îæ÷¾¾ì~HÞ±f:	éLg!Ç¦Òj?z½-3Éê<w$Uá.Æ3\b0HÛAÂo´1\f_«@ËÏ{÷v¼ù\\þ½TØ3J¯8îÝÄïõÝ#þÛóZmöÅA¶Î´|äÈI4äreZ;	;ï´?,À>AäÒÊß­l-\n©\x00 A!hP\bb^Æ`Î<ìÛc2gþÍÛÒ+óP6j)]®LÃáÕì\nèÄVÍ®FÏ29WOe\f(ëËP.r«ÔZ+I$°4@rµ¼!âÄ¾ÌXvÜ»7ÈCBoBrY[4jôv4Ç(µþ¤©\x00/BlAµ×ýþtà£\r<GBÐ 4(\r\nA=; A!hP\b A!hP\b$ÿ'yÀÜù³ßueÎm\fMRc¼e¬w'¥Õ¡©:tÖ_^zÊV5ÊX¥Ý¬ÔÛ(õ¼z+¡Ý®óÞx9ÐúBì´´õä´KÐ¡Éò:Ë]-ïùHQ×·r{JãÈÂóìeb2rëæ±ô/D4sÚZB.ê3ãå¤Ó\b/BtÃ\\¹yv@(\r\nABÐ 4(\r\nABÐ 4(ÎÙ»Bgö¬®@CÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`À¯\rZ{¾6ðrsK_ø¨nhT!µ/RnbÊÙe'Ùe!j×ª£±K¶BºÜÏ;ejn¤\rª=m#Ì4«m«\x00°!ala Ì`Ì½2\"2cÉ6 «¨Ñz\\ß7c0*Ð[êær`mðW)CNtòV¼·ßu>S7¥\r\x00Æ´ë~)«srmnÜ¬­Mû+«!ÅÖ\rË¯­è0\fC´es_g§\rýÈB\f)5&çL+ë?MYó¢lïÚÌqí3, }á8Æ¼}[vÊë5®#1ANyu\n¤»/ACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð$Rbñ¿þËÌò\x00\x00\x00\x00IEND®B`",
			b1mg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°\'Ä­\x00\x00IDATxí?OÛ@Æïºu¢l27B*]ZµSØ@¢K»Ð)[>_~tdh¥.­íXÔÌP$	),W½ÿ÷Õy0Ï/:>¿÷ø±s>¿¼©6Æ¨²<(Ýâ¾4Òew§Vúöu¸¼¡¼êFV]î>Õ÷ÝÈ¿_>Þ¥£´®þýx<yÁ:aê <ØÇÕ: Û°[+e©tZ0ÈlÈ9æSZéýÈçe¦8Yç\f20¸2j_Ù·uFIGí¤,<ñÐxai:ù«}û>¸ú|öñÝX¿>Éÿ^ÊeTv®QÑ¸£¢]öâÊ¨ÍãÌ1;Èæ±d/f^6g	¥~vÔíçàÏ \frß4rÆ7A#{BJ@!hP\b¸Ø»Á,²\\i£þÙöóÆMîË"äÍZ2gEçc;½º½:VÙÇ x}x÷TæÒ^¦r±[©¾Tj$ÀÒéÈÅÂNòÆíCnëÆçõëÉ)0%ô&$UP<i"ùö£º¼\bqUnûóé®>ð2\r\nABÐ 4(\rìhP\b A!hP\b A!hP\b"ù?ÉN-WºÿÎ©u«}·©Þ2V±ê&eT/3Ý&yé)[U+cU íÖo¿ä²Ù¦ÞòDÄl¯o·å!Z]vþ9íÐ\nô×»XØñ¢®ne~=./Ï^DJNrzð?EÔsÔín{°5ö!ÂS3WîCa\nABÐ 4(\r\nABÐ 4(\r\nA£5sö¶Ð#«-Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b0Ø³ÓÝÆã®ìzùqK_ø¨n¨U!µ/RnâÊå8¥Zö·++Å;ÖÜH<U{ÔÚ0FÏÛz¹QÖÎ©k-1Â"¨ð	`Ì2"Åøãò.aT¦ü¤nCeÎ²Ä"ÍÔíIñ¦ôÀÆuóìÛu¶´¦Þ¯ß¨åüy¤ÔÛ¯ÕhnOþÔ\nÖé9Û³}¾H¥¯gKk¶ïMÑô){¶øÚJøÊºÌ*Míà82Cr)p¥3T0o\'ý°vj;÷\nh@¹!SÆ|Z¿©Ri]9®#1A.yM\n¤ÛoACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð$RÕÇ·ØØz\x00\x00\x00\x00IEND®B`',
			ss1mg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°'Ä­\x00\x00IDATxí;OAgóÜ!ÒÇM¨%©Ò4®HíÎ5¿@IJ¡ÇIÊ è	),!f¢»ì¬î>¼ÏÑú°ÏZùµë;gÎggÇwXkM]ÞÔÞâµl\fM¢:ßÆ²$V*×ùõqxþÎÚô:ô)¢vEÔÒ»\r¿oWá½	&	ÎLÎÝ)ÏV&|h3ï5Ú!ûP­Za]5ÙlicºM&$Þé\bÒ¬kk®Áu®mk&je^çÑº#©wa¼ 4AAºö|ÝYøØÉáÑ÷o«àëÏòï¥ÂQzÅÛácüÜÆ·Óøµÿ¬Ù¿*ìì_YùäÌX3ÒÈaAî¶W¸@kß»ÏÊ°gymA:iñ]ÐImQH\r(\r\nABÐ Mxv2ÕÞöbï©ôÌeÊF-£¢»íU8¼z>ºÌ«â³¡Óhô·È=1 l/C¹Ô[­²4ÚH\n ¥\x00Rû­Ãs%$¾å~Þíð1®\nCBoBÖ\nR5|2Om¿l+À-¨ñ¶Þù(ãÑ 4(\r\nABÐ`Ï A!hP\b A!hP\b A!0íbï©Ñ¶ÝË@j·«óÄüV´(Û)üå¥§ÙªV3VEÓnjºm=~ ¦ÞÊD(!ÇÑmÝãQf=¡Íèiiõä´èþXMfÜoú¢nneõ9öÏé]-áì&çÙËÄ8¬oO7|\"ZI¹Ï¢o¬x=Éãô ÂÛr®Ü\bËyv@(\r\nABÐ 4(\r\nABÐ 4(ÞÙûBoö¬¾@CÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`À&]ïu÷zçÈËÅ-}á#»¡Uvä¾HºJÓi'ùi!ñE7­þ;¢Zq%ÁNb¹)§lVõc[óåE#YYE­[b¸$(·\x00ó¢Ì¤ÿDZ¾Â«ºM_1FHhÎ%u×r¢*Üå2ÎÕkó(MpP¹l¼)e\x000¦[÷ËL© \\å)ßäõj!óJe1£sC*Sðµ%-BUöz}¾æ+ë´°\fýÈF\f)5fÍJÏtæQß2LNyb]}Ô¡oÜ1?¾<òz+ÆHLC^Û§é¾ÀS'`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4	cÌM¹Õg<o+\x00\x00\x00\x00IEND®B`",
			s1mg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°'Ä­\x00\x00´IDATxí½NÜ@ÇytôÙ&TDIµTéDT¤Þz%º­ó\n¼%))BÏJ$)DOb%$o3ÑõÚìxü3{ðÌù¬?ëñãcïx|¹&ÒZ+_^x·x.¢Jvg¤¢Óäë¯÷cyåV]n¾ÔÏwãÜÏ¯µ¶×¡O)Þ;Â;ÊàD^Åö\nÙú@á <;íßu: °[[¾´:-d³Aä+Sæû#¥MÝù&\f\fæ`¡´úl­³(<:$¾ðÆBãA¤ï ÉÈ7ß¾÷íK}úáþ\\ªeT¼Ý£¢,'¹uÞþÓêàªvd¬rp¥e#F]|kuäv»ö²¹6H¨ò½ËñÌc<0ÈsÒËß½ì-\nñBÐ 4(\r\n1IîNVÌÁm/öÎ;MpÍZjgE·Ûq2½ZÝ]§UjÎûæwOe(íe*g¥Ü¼úÒªt@K¤#w[Gå_/µÛ»Ý?ìSÂ`B*ÙIÌµóö®\b1µnûûÍ4Dx A!hP\bGv4(\r\nABÐ 4(\r\nABÐ 4(\r\nÉHÊØ.ö­ÚÎ÷feH­\b±rT7ÚÊ_^ÊVuÊX¹Òn««¿iêm·bM½5q8®¢%BÛ1ÓÒÆ [Bdhµ»­£)êöVºsìô:³go\"FRÒ-¢³ËñÌ»íÙaBD!ºc®<\bÍ<;  A!hP\b A!hP\bÆ`æìCa0GÖP !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0`\fI\nÌ®w¦½Ç½Þy¸e(BT7tªÎÚ)71\nåÚxÇ;ÕÜHU{têÙkU/·xÌÄYTö0æI!ÿ¨Ë|²«±Lº1FHhÅ#u+\f97Pi¾lÝ7)Þ>\x00Ó¯û.S<+­¾µËµvö	ÄÞ\ridL-ë\f1¯>\x00#1ÄiL+-ùJu>©«%/mk^a\rè7¤`Ì÷Ë>.ysÆHLK^=¤é¡À['`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4	¥ÔSÒ\x00åâ!Z\x00\x00\x00\x00IEND®B`",
			is1mg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°\'Ä­\x00\x00ýIDATxí½NAgòttqP%J*S¥%ÒP%5µ%:×¼¯@¡ÇIÊ Ó¤¤°d7ÝõÎföÇ³£õa9µÂÆ»¾{æìxvöúÚÚ£êò¬öOe#=PQsj¥W¾ÊZIÜ]Ô·ÃÔãÆd×¡O1µ¢vÞm ?_$÷í¨	¹òË§Eö­È>4k£^XFÝA6DúÛ§¤Ù¾¦âþ\b²øú\f20¸2ê\\EwuæEGë¤.<ñÐxaé:H4òM÷\'Éc¥Oû_?/ôÇïåïKÞQFÅÛÁ3**£NRë¼ùkÔÁµwdô9¸6ò"N";r·ã=mö±Ü ©ç®²\x00ãAZNz|tÒZR\nABÐ 4(Ä%º:éÌÁrÏ+½«>w9Z^¹¬BÙ¬Å;+ºÛYDÓ«ÕÐyñÔ*ºegMÉÕSÊö2Ë¤ÜjíK£d$°ììÈýöñvnY$$Yïvð4H)a0!ke+ëØkÕmâ\nj¼í¯WãûÀÓx4(\r\nABÐ 48²£A!hP\b A!hP\b A!hP%*c»-½ë(=ÕJ¿Îýº?q+Z,cUPÝ¤:³Vr;O=\'¼\f­j±*K»9©·iÑgT!Ro9³£âÿ\bw\n×	\bm.ÄMK;A.â\b*r¿}"EÝÜÊ9vçÙ«qSÒEBBh-$%æj8É\bù>$`â:Î"\b1-så!DæÙ¡4(\r\nABÐ 4(\r\nABÐ 4z3gï½9²ú\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rcHT`v³7î<îÍÞ8È["DuC«ê\f©}r§P.[v²¾<dõåñmæÜ¿(ÝV\nì$­¹}\bTíÑª=`°Ëªèo^¥q"@[ì$U-1l]\x00yFÄ¿åô3§°qmMàc0Ã\b©]óºCNÞ71$y-)Þ}\x000¦[÷ËL©!\\õÇÆ©Ó¬k£Ñ¹!©ð¶÷\b{;mb\bê8²CJ)9Ó²?öûQ(£vãeË×=ÃÐ7nHÎoUOyÄc$&È)¯éSt_à¥0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\fRê&³¯ç¾Âú\x00\x00\x00\x00IEND®B`',
			i1mg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°'Ä­\x00\x00¬IDATxí1oÓ@ïølUÙ::`Jÿ\x00Ê^æ#eËÿà/0¡Ý©ÀHE÷Ò!R%g9ô¹±9Û9Ûw¾:oÝ÷¬È±/ß{í~>_¿hcòåw§ÒHTÚZéYúþóýXÂNÒåö¢~¼Ö_SÞ>­ñî\bï(k ÿ¼HÊ;d'jNå¤<=JÊu:!Ð­AW¡/Al7\\cö5%|}¤L%©»Þ$IHb°2jVÚg¹)ytN$¾ðÆBãA¤ï iæ[Ìóu¥ÿgÉ¯ýñ{óß¥ÚÌ(YñztWø,}³Ößþ5êð²63Ö9¼4ò%µAä@nvkokdÛ.Æó¦\x00Ìñ\fÂ O-H/W|ôÒ[â A!hP\bb>´Æ`mJïi¥Î¶çUãË64ZjGE7»I:¼ººÜ<´RÇå!Yáé©¥½\fåJSn^ÇÔH@ËÈÜî¸¨KH¾Ïõè.ïCÂhB6ôhìYuQØÛþz=q\f¼GBÐ 4(\r\nA\r\nABÐ 4(\r\nABÐ 4(\r\nAB2Ò2¶óÉÊ¹]éVúÍÆmù¦\n¤ ¢ÍX9ªd¶Jõ¥ò¹üçe¤ÙªN3Vm¦Ý,!3Çwlwê­\"â÷«;@úúìÜa\"4\\=-]údo!·;'1¦¨Ã­l1ÇÞ$dëóì>b\\Bbè,¤ æb<÷n{zÄEé8WCá<;  A!hP\b A!hP\bÆ`ÆìCa0gÖP !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0`\fIÌ®ö§½Ç½ÚFùqËXÄ¨nèT!µ/RnbÊùH=Íº®F^ßZ·;ÕÜÈ1DªöèÔ0FdË}ÑßÒ§sÖ¿zì[bdEPÙ`Ì£6ÂX?ÚTøXÁ0Bª@k~R÷¡\fÉ¿C7å\x00é×ý&Sw5DÊQÌèÝVÆøç CPóÈV\fi4ÆÿNko½<oµ¿}Ð·nHÅ³«Jëà¸bÄ¹å5C*\n|t\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACPJýÒiç\x00´Þ\x00\x00\x00\x00IEND®B`",
			us1mg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°\'Ä­\x00\x00\x00IDATxí?OÛ@ÆÏýln¥lÂÔ­HtÉDçÌ²eæ+ä+t¤c²Ò±(ìåª×ñóù¿}rÌó"òÇÎ{Ï=¶Ïç7	´Öª.¯j¯ñRV\n*îÎ@:øýa(÷ÄBÒåö]]\fÏßjí.C"jwDí(½[!øûz¥6ä(PÁL9jHj£<?Y©ð¡N½×hìC·6ÚëÒh·`í}Ì9øï$Þ(\b\\òö53HÈÀ`³o*­æñãëeÖàÑz ©7a¼ 4AAº|óÃiøXcPðýË*øü«ü¸T82Ê¨x;xë§[üÚûZ_ÅA¯´|ä	hÈÝÞªq(÷½Ëá´,\x00Çxa¤=¾:é-\n© A!hP\bb^æ`µ×½8Z^¹¬BÙ¬¥pVt··\n§W+ Ëô´*¾*·ItUô!qõTæ²¾Lå[­¶4ZI ¥ÒûÝÓ\f?!3w/{;x;¤ÂÐ\\AVFEÑóEb²]«n#À[Pãuÿ¼ûhOãÑ 4(\r\nABÐàÈ A!hP\b A!hP\b A!°íâhÝhÝùáÔT µÆ[Æêü$q2©¶Üuå?/=e«Ze¬ÒnVêM_í\\¢óÛM½ÐÉLî$Oö\bm.ÄNK[ÿì\nþ¹ß=õ¢nneõûÄrÇÝ´¶g/ã6:òà¤¦½h-$!ær8µ¾(:bÅËI§^è¹r"4óìP\b A!hP\b A!hP\b½³÷ÞlY}ACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ1$,0»Ùw÷fìåË-}á£º¡UuÔ¾H¹U(gdljÍì¯}¬W\nì$©¹6xªöhÕ0Fû¦^nYÔ9æ7¡ªÔåÆ¦\bÊÜyVFDfìX{ÇL\'Kèì×R?[òÁ0Bª@3¾R7Ç3«³?¶1$þL)Þ6\x00Ó­ûe¦Tnê/¥¤Ñz­±!a@ÌèÜJÆ¶d°:ú,ÇÔ-·\rãÈV\f)5&çL+ë¦÷GÖmËXóFî©åì3, }ë¤ùùi]vÊë5®#1ANyu\n¤û/ACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACÀ !`Ð$Rÿ^¦¤µ$|\x00\x00\x00\x00IEND®B`',
			u1mg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x00\x00å¥Â\x00\x00\x00	pHYs\x00\x00°\x00\x00°\'Ä­\x00\x00«IDATxí?OÛ@ÆÏýÝÝ:¥lU;/P$ºt¢sæHÙò=øðÊN$JÇ"Ø)"!9ËUïÅ¶.þw>û°Ìó³,ñå½ÇóùÍ"­µòåw×Ò((³;#¿?OeÝÚHv¹½ªëOÓ­ß÷´ÎoC¼wwÑ5þ¾³Ç*Ú ÉQ8(Ïãüß:cØ­­ÎB_Z\f2l9Ç\nçýüDéÂ@§î|AB{°PZ-ym³*<:$¾ðÆBãA¤ï fä[,J;ÿG_¹ßjGFï&OÖ¨¨íQÑüíã?­®jGÆú GWZ^¤6tä~·ö²¹6H¨ò¹ËéÂc<0ÈkÒËß½ì-\nñBÐ 4(\r\n±1w\'+æ`Î¶kçË&¸f-µ³¢ûÝØL¯6w@WÅiYæÉÑÇÒ»§2ö2Ë¥Ü¼úÒªt@K¤#;\'å/nÓ²ùåÖvw§l4R)(ÄÔê6q[&$½WÝE@!¶ Ömÿ|è/ãÑ 4(\r\nABÐàÈ A!hP\b A!hP\b A!)¦íâpÝªíò`aW u"XÆÊQÝTh+¼\f­ê±jvû¦Ûªò§Þ\\"ÎÏ]Bt Dh{!vZÚú\br+!;\'!RÔí­tçØçV½êÐ6Ïî!FÇÔt0l¹.¼ÛÇ!D¢;æÊCÐÌ³B!hP\b A!hP\b A!hfÎ>Fsd\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rÆS`v³?ë=îÍþ,È["DuC§ê\f©}r«P®MÙw\\)°XiÍô!PµG§~Á®z¹Õsî[b¤EPé\n`Ì4Â*3ßîª­ÿ RWøÁ0Bª@+¾R÷9\rÉ^O7¥\x00Æôë¾ËÂCbúbFï42¦ÁÛVÎÂÒ¸ãÈ 8ix¥¥´ú&kòø­Òê½¬ÎvöÐ>¸!c~~Y÷qÉ»eÄ¹äÕc*¼u\rACÀ !`Ð0h\b4\f\rACÀ !`Ð0h\b4\f\rACPJýS5ÏÑ­\ro\x00\x00\x00\x00IEND®B`',
			uu1mg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00KAt\x00\x00\x00	pHYs\x00\x00\x00\x00mhú\x00\x00DIDATxí¿oGgS HÄV@¤pENj(ò/P¥@©¢t&]RF¡ v$·4i&))`äØH$øÀÍ²{7»Þ½×ÞÏ>ÃóX'û~xîÛçÞ½ÛÝ¹ÙÉ¼÷®+Þê¬%£±Æ²Oòôf.{õû·O^´ýSvÎùÌe³ùßï=ÜÖòâ¼ë9ïfÝÖôvt[øYª<î×_¸üOïÜÞ·³:ÑØA4FÎhìè6Ý½êoÙç\\k³ÇgV3õ2-ïzìà­8zûu6}åmûæ¢¯ÜýöðïµÓ«¼mÓØA6ÖiÎº¤Ó¥¤°ÃÂT(L¥±°rg¬r[øô±S6| |»hëü Ý»WßHã´rëÀ=?ö,Ún|ÿ·R/ùÎ_±Uá¼ÛpÞ-Wv ÃsF[oat	áW¡0\nS¡0|H[\nE¥BQ©PT*\nE¥BQ©¢âãÛ¿¾³¯­ÁzÇ²u,£r¼aíôj¾ÿïÝLq<`aÐQüüØ³¸7B:æpaÓãñq¸:¨vd×{«ãn¸¨IEU®<¨Õppew¡°áR]	]ï\nu©ýn,Ì»^Ôî¼ëOõö°ã\nE¥BQ©PT*\nE¥BQ©PT*YÔÄv¿M\"{A\x00²%,d	 K\x00YÈ@\x00²%,d	 K YV¶~êVòc]Ö3®{ôó[Õ:¶;tÚöÐmú­ÎûÖÇùMïÖZËnîæ®ð¹J­¤^õóú(Ã6ªVçÝ¢ÆåèK~/µ/¤øæE~Ù{Xåw\rI	ßÆ\bÇó­p^òR\\¿_#ÕZ2³¿°´­ÖÔWïézºZ»5½úÕÁàá,å×ï_¾\x00áúÍÅäïè¸¿Î¾´¨6%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈàx\x00É@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00Yé£ïQêÊèwÌjM[\b>e(m>6a¼±Õ%¯õúíú	æGßµîy@yËxgi0y×åaZ¥Áäceyß>ìÿ5òÃÑ÷7N­ÐÙèû¶''ë0©5üÌ¶B©µ½Ñ'-ëÏ2¦Öx*Ý²ZÕ\"*ó¢4-DÕvÂp2Úõ'Áh¿¹7´£³Ó«4ÑêGu¥ø=_tø$U;¸^LA¤¼>ö$ZÃ'w+µUîJ±JÎVV¿ÔZc¾5½Ö ë3v$¯Bµ³3gÊÎ(Òy­OOì¤ÖÊ\bvw%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00_fXÁ&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\bÐi°²ÇgV³ßÙÉúÇ·éåÇ¶ë²^Þæßï¿\fÏÑU»GÜkXv+¯á5ëÚkê<¶cçÏ\rs35÷§úñôÖr»a®Ý0q9r9Gxx®5ÿ0.^W:ÇÓ¯4ÍØ=ÒkxmÊ\r¼v¨2Tajïbºòh®9ïîrFîÅõV	aJóXÂk°^ÚÊM«~/Õqxmò×ÈÈë,x´0ËkÛ°½x-Tþ\\S[y=°Pí7X¯{¸ö±²ÞýíÅ±W\r\r,¤ëMú8ÜÇÇàêØòãÐVDóvÖF´ ñõÃ\bTþÌ7ÝòÜýKÃûÃßÞ-)mX¬OS[o_u¬F¡àÚË>^øá¡Á;T®;Û¬òþWÁÙ¬mtæµ¶Gè¼û½\fÏ½×ÊÀkç\bdë§n¹¹µo½ó?uÚn8~³~òK?÷èóNÛýãÃïÜÖÛSÞ]{âOýùUô¼ÝÏç¯Vþé£ïxç<æÑÙoÜ?'g÷Oÿ×÷ó¿|ÑiGÍk×ÁptéL X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,èçÜÿî^j§JÇ_\x00\x00\x00\x00IEND®B`",
			sss1mg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00KAt\x00\x00\x00	pHYs\x00\x00\x00\x00mhú\x00\x00VIDATxí±oÔVÇ; J4¨©@ :dhUUT'3\fù:DªnÐUYÊÌZ)k®HTêRUTj*µÑDK.\bxÕslß³Ïw÷¾É~>'+9ïùëï}í³ýî½yï]W¼ÕYIFa	eçäéÍ\\¶û÷×O^zSö¡«Í¿w¿z!ìåä¼ë9ïºíùh^x¬Ö»wúónÍy·â>ð¾ÏîDa{Q9£°[Xöý%¹lÙEå6²'×3õ2]Z¶:G_wö±¯¶¯_õµ×¯Üü¿ybÃ6íeaæ¬K:ÝJí'\bSAJ«°òb¬6/|{¹(D~Ð?¼ã¢<WA´¾5¾H+ÏÜóCÏâ³êÿï>õñCê_üEgq¹ùdXgtvÑùF~© La*3yI·\n¢RAT*JQ© *D¥r0DÅ÷jó¿ºýZgQÅòÅjÞ¨{µû\x00'Öóëï¢Êã¥üÿç5ï$ßs8ûØûQ¾ºçÖwïôúýfmu\\\r²ûæãnX$n®eV¢Zn®\f\r¶j¥Vp r#[íVåÇ|^®ßv·T\n¢RAT*JQ© *D¥2¢f¶úmÙ{ü³\bf	`\x00f	`\x00f	`\x00f	`\x00f	`\x00f	`\x00f	`@²YÙ£ã7uYÏX÷øõ[iX*íC{¨6õÖEåýÈåü¶wë©Ek¯¨>¿ë¼ÛÒºµx_ÑªÔk´Ø(êÛ/î·i	Z}ÞÌ÷ïÚ´Z')~yO[÷[Ì\nËÑü^.8,6`Â¯2B¿åT<¿?´~Õq1jÚRÿÙwÖÔOïéWÍOlä²Ûó;©?]©Z6`5~çüà§1áùõ«É¿Ñqzi¡\nN0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³¸%@²0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K\x00³0K ½õ½ÐJ]iýnÖ¤¦±EGð)Mióf´	í­¦\\ë[5­qGó¯£uêå#Ú;KÉ»ÚfµhO4kQÍìûmØ£Ê.\n#ÍKÓ&¯¼aÖP	ûaØ8­Î»kÖÖ~(­£LîXâF[²ü>ô2Nkè)$ôÒØnL£U±hß\rE£Fux:Ãh<Û	Æ®UòN:Ú:íè¬{Vý¹~´Qgâ!RªHo\"!Q¥Øêy1D~ÔHù|b'5­Ûó;åû#}+áæ»_ªÖä+OHJ/ôØ¼5z	==\fÌzé\\ëÓ#¯RµÒÂBËÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌÀ,ÌàÇl`{!@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á:\rVöðäzöÏ;¯²þáexùåº¬ù×û/Ã:º*÷ û¶ÝÊ×ðuíkê8¶ÇÏ\rc#5÷çúÍ¡¸¥rÃX»a¨þr0årð°®=5?¦V_Áá!Î×F\rqÞêkølÊ\r|í>Pe¨ÂÐÞÑpå\r[¿;jüÊ0¤ylÂ°±¾/ZvÖhhõÃgFF¾îÙG´ä/þ/ôÍØ´¾CÐÅc+_÷4TÅ\\6º|l9ï&}sÃõ;ëFü5¨zlá«¿úá=mãÿ¨.y¸¦xlùuhkDKÀâ½kR¨ö\"PùÚ¯_LùìÚë«îÎùÁëáïV2,Ö8:-§xl}~ÕI°Z\b[®\\¦üàWG¨ÜòØÜ¶`°¯ïg8XcÊèÌ×+BçÝoåWÝT¾ÏÊÀ×ÎÈ¿é7¿ñÎÿÔi¹áþÍ£c_øÅuZîï}ë¶ß«f¼»ùÄÿãËh½ÜÏg.ÕÞôñ·½ó?TË<8õµûûØBõúü¿}¿ôËçê<h¾v,\x00GXA°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`ÁîqÎý¼µyË®G#§\x00\x00\x00\x00IEND®B`",
			bb1mg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00KAt\x00\x00\x00	pHYs\x00\x00\x00\x00mhú\x00\x00aIDATxí½oGgS ;\bV@¤HED\'ÔPä_p¥ÒT¸t&nÚEÜºID¤4QD¤¤ R$|FÀD³ìîÍîíÞÍÏÞ×>àyN+û><÷Þs¿=ïÇÍLæ½w}ñFo-Ñ%4}ú0Ooæ²?ûøi×e§Ï\\¶=x÷vuGXÊÅy7pÞ-¸íùè¶pY©=îÖé§ÅíKîïËÛYhl?#g4öò6]?ï«ìS®3ÉÙÝËËÇ[}G¿îÌ_ûØ¾|É×î¿xuôûÖñ\r>¶il?ë5g}Òë«¤°ÂT(L¥µ°æÎXñû`ÒNÙ4ò-á;E[ËU»×Ï·Æ;iåÖ{rèq´#7Úøáso1¤.ùÎ_±Uá¼»ï¼[.~_Êw ÃsF[½oaô	áW¡0\nS¡0üI[\nE¥BQ©PT*\nE¥BQ©¼E5¬U·smO[ñ±êLE×±Úñ­ãùþ¿wG¢cùïO=ÏFHÇÎ<ðáxE|£<?ß­ÓOë\'²g«ãÓ Þ­UÜqÀ"©¨úÁµ¢Z®7\n½ªµ[\nªº4~¶æÝ hw!ÿ9¶íaÇ!J¢R¡¨T(*J¢R¡¨Tf²¨=ý6Ìì1þYYÈ@\x00²%,d	 K\x00YÈ@\x00²%,dYÙ½cWë²qÝßªÖ©ç±ÃIûp=6ç­ë\'ï×Æ_Èo;ñn½´Ô:j];8ä·ß_¼­ÔªHÔÿ0¿¬7{Y´Iµ:ïV²Ê®üj­Ó)¾y/÷o7dõèöA^px|xS¾Æ%(âú¹øzü©ÖzåRVÑÝ¥vD«5õÝ{tøy3]ÝßIýêJÕ#xôVòë7Î¾®_¾ü÷×ÉgµrÂBMd	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²8%@²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@@zï{¡ºÒûÝ³ZºÆÁG½ÙÇz²×ºÑ&ô7¶ZòZ/^k]úr¯í¥Ö]u(ï¥v&ï{éèP~³ìDËR;O5¡çýrÜ÷~µò£Þ÷«Ñ6w#L~òf²c$°)µËB×8J­ÝLXb²¬}5dJ­qkc²ZÕ"Ê¡UÆØ­¨®/Â`ëÁhV~¸G²jvô6¼JkÃ¹aô¢ZW¿ðHHTYlu½"?A¤¼>uZ­á?]±ÚEõ]¨¦_W¿ÔZc¾=¿Ö ;W¡Æh a¤b¬hDÞk}tøyj­ô°`wG\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	ðe60µL X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	½+»{b#û÷íçÙðÍ¶éå3-g.óÅ²Ü®Ëy¿÷,<Y%÷^{×«dÇ×ðõí5uÛ©óç9ÀËIËsÃ¶©¸Û¦äïk7L`\\N¦\\ÎkgÍ?¥ÕkpñbRçØëzäuªãÜkxoÊ\r¼ö¨2Tajïbºò`mFB:CK\bSÇ^ñMô\\D¡òõ©Õ7S÷&¼îËï\bVµ1ßüÂë°Ýx-¦//TÇV^÷-T-ÁZóõµ-3¹ØW7\\{XY7K{»uláÕFDË¿Áý:j¯ü­«-ÿÚhÌy·ÔX{ªm\nTþì/qù+îÆÙÑýáwïV6¬Ö\bÑg©­·¯z	V«PpcÏeoühÏÐà*WËmV\bKyÿàkB½ymì:ï~/·¥ví5¼W^{@ »wì[ÜúÎ;ÿs¯íã7÷~åï|Ñk»|ø½Û~k®ºá­þØ_GÏ{ÎýòÉùÚ}ôÓ5ïüÕcîüÖýsôHuÿüCÿþ¯_öZçËæµï`8NéL X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,èçÜÿ ¤Q¶Z"0\x00\x00\x00\x00IEND®B`',
			vemg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00+IDATH\rí¿kAÇ?O\"ä B®J Ía}ÎÎÃVEk+óÄ\"½élR¤W­Á³ÓCÒYHTT³ä'3;»7»;{¹¸bñsóv~}ß¼yï;#ª/§.ó¨)Vð¥49USÛNû7§F¬^X#/]HÚç'nme%b°!»öeÂ7*]AQI\fú|~mãåë¹}¬:°:ítVÛzÙ`o¾÷±·ßl¥qä^tÄ0ê'Ë±J/RÙ¸kÍêÛD7ýHÞÌàÛHÓ#rßµÌ.£~½Îâ^|çAoV!×òöÕÉM¶á¨T^·\\t«Í¾µ\n°úµõjèâf<6 IG(Ý`Ù-ÆU}ãtTÓWR5Ç¯ð\fhçÆãÛäÔaôÏ|÷ú\x00eÿ%ÆÉ9¬Ùu¤ýÀéµP£ùMAî	r»\nx\"ØÚkÃÍn°k¨<lÅ\\Ü1#À2ð\bÒPx*'~2óþSKv¡^û~Î]Ë+|Yàt§³Ç22ôHo^[]¸i)_¼\rGi­EªôKiÇ&cûÙ'Y6'cNQ¹h~¬¹¦ ¯éüðö¹éËöUé¢è[À\\³®iXQôqiÍªÃÏæãU(U¿(8Oùä¿½å?Wÿ~ñ{$àÌ\x00\x00\x00\x00IEND®B`",
			vemg1 = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00|IDATHíVOhÓPÿ½Õ¤s´uc;u¥\r6]vP\\Aô¨vÕVd9n]rÐyqxAPOUð$;\bÁ  VA2Úv¶{ò$¼¤ipøÇûòÞ÷?ßûÞcsx@æ9\r¢[8zàC«,È³$O³µé(¥9Pi/,«LUfi¾xyß®[\\3?ø2U1\"\behZ$:åàÓ´Fþ0kóóÔ³7J-sm·_GoCÑd]µõ'¿®;Rû8´ä©ê\bö{÷LQ'âÀÌoä8;!4àD?n¦ô øõÜ+ôÃ8«ÏaslRSÆøöMÊ]@òpênÛÆ}ð|Çr»EX.\fßÎí\\µhr©Êh;áXÙ>¼_uxÂn¤ïñÉ­[L¥ñ5£,ß\x00°Ä5ÓÛ|Ú°ªÊÑåÍÎ1Ó)Ý^Ëvûõ¼³f¬n±o£ï2Õd9*ì©Y\\3v{GèWIÍWZì¯t\\\næ?r7¤÷ÂÖs\x00ºÈ{Lk;ÛqËëciXò/ØõX¡Îóy¹f®E2LHU²h×Â`·*â KbÀG\x00Ñ\r7¤:¾L¼hÖ½q¢V E©JvEt]âOßÄAOcù´ËtãdáÒò3/¾¨|íÀÍCc©\nµÇó$oÏÝ¦6i+ë\n¢S¢G§ªÛ ðñÃ~y¼0hoM3UÙ\x00°Ì5óµÈ)âdmð=7E\f924/®qÍ¤cDWÅ{éTQDiraèi=Q¹ÂxÚS?\x00ÌØÎ´à¯þ7\x00ð_>>9Û¼2p\x00\x00\x00\x00IEND®B`",
			ii1mg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00KAt\x00\x00\x00	pHYs\x00\x00\x00\x00mhú\x00\x00QIDATxí?lÜTÇATIJªµjU\f @(K;0!V&*	±µLÍÑ,m·J@ÊÚ±U!ÊP$hªFKÕö¡çÚ¾gïü¾É5ú|\"+¹;çùçÏ}Ïñ<¿Ì{ïúâ¹ÞZ¢1Kh,{g#Ooæ²'ß{ëá¸_Ê^sÕ¼ÙÝoV/O@99ïwnsv+z.|-ÕæûõÍÅkîUïËçù8ÑØN4FÎhìÙm,ûötÞr³ÜFvûØjæ²ÅjóÏ[m£Í¯;q××6ÛÎûÚëç.\r^;ºÊfÆv²±^sÖ'½®%í&¦Ba*­c.> ½'uï\föomVíF{5â´rïÀ=Øw?Þ+¨~þæcï1¤Náà¯¶WáÝe»ùdXf´wÑûF~\nS¡0\nSÊ\rìTÚ¢¨T(*J¢R¡¨T(*JåÙ(ªq~`¹zþËÛÚlË¸æ&Ë¨oX;ºÿ{7W8[½ö`ßýø¼tÎáÄ]ÎWm¬µW\\.§º©Cïç:¿1RýÞ-MÊþsî+Å£µ×O;÷Ñ÷Ï5UI)Öjä¬Mã\fJ|­§ù½õ÷\\Ê¥Ì\fÚÎöpà\nE¥BQ©PT*\nE¥BQ©PT*SYÔÔ^~F¦öÿ4,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@@²¬ìÎÉóºlÑ¸îÉË·ªµóâz¸h.°ËÆ¡S@qñ>ºØ¾R¿¸ßváÝzj©u±ÑS½V¯[¿©ÔªHZýew6¾æ¾[ÒºjuÞ-²ZëM­µ»¢«H>­ÏßìÿÓB(8ÌV å ó/SñøTü8GªµÑe¦¨µVoøhµ¦¾{÷<nKWë¼³[]®­Hè\\¬D.&<¾~r¸RáñóÉÿ£ãþ<þÈ¢V.X\b°ë ,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00ç³H\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈHï}/ôRWz¿[`VkR×ØâFð-µÃ×Õn´	ý­¦¼Ös=ï?,j­Õ«ÖºÝå¡WûÁè±Ô¼ïiBò0^âz\\¯Ú¼SÖ$QQ²VÏí°q¢¢:õöÖû~ÒÂ'ÉÚ\ra]µF7ÀØÖ;¾´`´ËÚá»$ÜÃ«W©U-b®YÄvo¯2îáfÇo1NX¹qo«··Û«´14Vtadþ	*­CäGw)wÞ£VëæìVñûW#YÑ~øñK­59æÅÂ²îØ2o%'ºH¸SHq¡¬è\"½×zïÀãÔZéa!Àá\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈ@\x00²%,d	 K\x00YÈàÙÀ>`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	Lè5XÙíc«Ù¿/=Îû·ºÏ\\v0sÙræ²ðsÇ¼y½ò(,ÃJÆ´{\rëà5rÖé·òÞ³¾½¦cÛ9~n¼t¸©y03hÛGÅd¬Ý0T9r9FxXÖ¿S«×à\"8iâüjät¬ßÜkxoÊ\r¼ö¨2TahïÆpåÃ_+¦3rCÇöxÀ&z\r.ÆXË¯k]~Ã{¿GF^wtÅ+v6±0ÿØv¼ðD>Ï¤úµòº+¡z`íõpm×k±eªÿWüZxµÑñgpV|¯¬¹?â×òÏ¡­	K\\qó@åK¿p~8åO×^_r×O_?{·¤´a°Ë÷ºüZï_õ¬V¡à1G.OñÆ\f\r¶P¹öXn[°BXÊ×g4XÚèÍë#BçÝ\"@ë²×ð^xí}\x00ìÎn~í+ïüO½¶ÎßÜ9ü¿õI¯íþþú×nóÅêCkþÈGË=å~~ûtíÞøñ²wþ»j[Ç¿t«^ýoà~ù´×:5¯}ÀqI¬ X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`	L X`Á\b@°À&,0`Aÿ8çþ?\raÁ\x00\x00\x00\x00IEND®B`",
			olmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00\x00ïIDATHíVQ \f}]¼Ën°oÄÎ\x00AÄ·êB3lÔhBéë+R±"I\b1èð5|@LÎ\b6ñ±ÆîÅèoLv¸§PFNÏ¬\f²ëÍ«ùSp·ÐØ3ÆþÙBÙPElç^)¡üc&û¶U\rüÃà¹0\bdà´\rÂ]ô\n<m°Kü\x00¾xJÀ×éF#YgUUUk¤j§q#nÄÇ&îrJ>7]4´!ãïé\r8<}¬üø®îq~TÖæ2r°&à*©h¨\x00\x00\x00\x00IEND®B`',
			nwve = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00^IDATHíV¿KAþÞqÍ	\')B¢Á`â6mrÿ"ü	wvé*¤LÐ"EîHâh£	91?ÀÆ¼ðvöfwof÷,	üÝ¹73ïÇ|ïÍ\x00\f[ËÌ\fyÔk9ÚQ/ëò:B /<ö~FZcD~4	ä´;bG\r¯E5öï~lk¶ÍÀ¨ÅÕ\\¢4ìÆØe¯«ÏÕiÆb!¿Ç^/ôÓÂD½J8¹4Ê¦AI.¥X6ÖO	Ý\bWãðD;,R8`´Ë²aÛN÷ÃO>¦m]~Þ§¯wTûiò,ð*~;gøÜé5ÿËÉ&%Ãè9¿ÀÐö3¨àíwóXÆbÍ>yÇÛÚïþ1H]/âÝÀ¦î]½¿ÞËnfçðèåúÐ¤÷Tªß8Ícwt)q2}&Éu«òIB	åö#âºÞzë%J\f\'(¸ã51ô*=çðB×É5OÂÕ²«Éí+:YUÏF¹bxæ$U¥ºJÆI^`pLF¡8"J%¥ï5Õ±ÑçucøëI|SN\nâ?x|rq\\ü¢K¿ôµËÀöàHlæ ËðqÍá#»ÛÐp¯KÜßºÍ`7\\üö\\Bl?¼Ò!A²à?S¼;ZJ»\x00\\Ñ*.\bd-X={4y¸%×ÊSF«´e#\r?|r¹iÉe¹ÆÒx\\õÑ´PîµI÷c|r×¬¾Vüw\x00à7 ïÝëÊB2\x00\x00\x00\x00IEND®B`',
			bxmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00IDATHíV?o1ÿ9L	R%Ú\"¤ªL \f|$ötéL§º_\x00)#ê[\f\fYéG@*kY: JP\"¦I¤Kz>Ûgû|IH(\b	^rg¿÷~ï-\bö(ñ»øô8®HDxñ@8ÌäuqyâÌPÇÉ£¹çëðGÉpî|$¶MËmgD©­ú'ÄôÇLRá	\n¸¨^Ë[czëMÄÆ1iãÒþáÈ¾{NI?§ã-oíÜ@ÌuÕhDãvbí&Gìeã8õëbXItx0Ú ìkÇ³¼:¨Ë°±.ÎÞzS­Å*JZ°AâxjØûrª­P?sg\b»YòÐY¨ìfßª¿#, êâÛ½®½ÈßâûF³PÚÉïál³+çÎ6»²@T®}Êç¢¯¦ÚÄÊí~qi`¨µ0¹Ñ.M§Îwùâçå¶xïø,5¢AäÍWïr?kd¶g|ì¯Ê¹Ë'RSïî%ÔÊ	-©Í+ÐÑW>ÛÂ§Ý¸wáß­íÌ^e¬dõµ\x00­EpX\n9¿»Q;äå«ôØPµããNñãöì ¼ºEù {RÞ]º«XÈ3ËçáwV^/ììÌG\r\n¢¶e|lHñ/ÅójKS7#Î«L©ZØäÙ>á8ï¶éÔ9\r<`ÿ9,¾N\x00ùÐ_;aK6CÎyÈ\x00®¸£ôö­¹í ÇN~3Àg`Íðô³[|P{^-å;>`ïJ3rL·&Ô×Ö2Ä\x00»\x00\x00\b4pÖÿ÷ê?2\x00ü\b8¬aÀW\x00\x00\x00\x00IEND®B`",
			uxmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00¢IDATHíV¿kSAÿ|£\biBZ:é¤DÐ?@pO:¹µÿÐÍQ²Ø­CVÄAH×D¨ VK"MÓ$ô+ß{w»÷î5MÒÚÅ;.yïî{ßÏ÷×}î3Ãmy¦{=ºhEIÜfÆÚËsbKRur]o¶ïöÀ¨NG¼e¬äâmÔÉmúÌ­¢þ^ãY3ÞNÈ¤®Ø éÑaá¦zaø=·¢X®±142R~Ö6ï²A6]»pÇ·vh ºj5u³vPºvë¶xY®EK]´ò=´³n¼P9I.©°É&]¢T¯-BüIâÍ(ª!ÈÜ[}]1ì>`NØDÌèü|5\'öÙ¥êb6¨D¿nTÝEy§ýë+©»½ü>h0öæ«jno¾ª\nDÎujØ<vö§­¶V¾>/Úê\bßo^²µ©>çú½õûÞ{îÐ*"P@	ô@ëÖgÞÎvmMKóõ³súWÁ}@ËxòéÒöùÚwa\b|¼¹é?ÀÃhîuj´í¬ÏîzÑ<ººm£!¾wG9u½±~&ãâj{"³\'iY}.ÀZ8a±eTR\'äÅËèÚÐµ¦hN+"HaôrõAÃ UäÎJÈÈ³Ìµò¯ÆöNfÈe¦\\ #ÛÅÂº\n§!#wd|ðdMÝ^äÝ5BÖ¥;ù5¸aJ»,or¯úì.\f%ç!¤FÆNäw\x00XX´<úæß¸ÀòÅ8`@F¾ÇæV] x7rçFZR<~K \x002\fnà?Wÿ³à/ôE°x\x00\x00\x00\x00IEND®B`',
			sxmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00¨IDATHíV¿o1þX¸¢J@RÅ\x00(þº§Kg:1tbþHÝQºuèÀ5ý@a- : JQHÓ$RÒ>ß±ïÎ¶øí÷¾÷ÓV\"»8WoïÔm+zÇ-¬o	ç©#iªWê;\bªØ»3`g<ÉV0;ß\b±©^iÛ!bÑ?ûChrÌdËÝPð®£ESÇNÕIeà\x00ÃáÕ5mÄZSb !Hþ¬o	^>½CäK±:ú¥Ö\fi£iªNýb/ÅÊÏÝ¨M-kÍPcÆE§<ÍnqÛ6c*ËÉUm6L­õ¸ï8$Ú[èA¤}º1\fínúfJrÞ 4ëðÍ±Â.¯«þÎaUU_®×íE~«¯×Ö¼§ÿ.	æêv0W×Âaù:3HÉ [ül¢­Sø\\èX[§ð½ö9ChVRj©sø5:ß¥cÃHA5$N¢ØÝbßÄ4;áGs+®7¦n\r¬[³ûvraO3à8¼òÂ\nMI)442­/X±ëÑ/Å¶¥ë@.ãßí©`OÓ¦Bý[+¨ùq°\nL$9Ý¨ê\fyú,¼6¢ØLíc¥h_<ÕÀS-|#)tU3³+®*\x00ÞY©=Ö)?H°Y\x00vk)ÐsæÜ¨Ví`Jcñ£Â÷À]|¥¿_KåÛÇ÷K\x00î3ó¼Èn®?Û7<ýWÄøÖgwoþ'v¡K^æþçD@¾Z³ûÌëbHg`\b63ÒÇ\n\f\x00`ñC*ú£g¶²Ê|î3å¤À=|+=JÐS¿óÞ«gÕÔ\f]:°þ×ê?Ö\x00ü\x00ò¬úÀÞÅ\x00\x00\x00\x00IEND®B`",
			ixmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00IDATHíV¿OSAÿ\\!&-Ö0ô0q/£;±ÕÀÍÀ Cg&ã`kYL01\" ´M^ùïõîÞÝ{÷úJ+¯¹¾{wßï÷óý}Oìáµ8|HU\"¼|K P%.Cts=g2kSòLC¹þX7ÑÍíÊwPO)PTO²©C	2'ÆiÊaâ²p-®fÐv{RªI'V´RÛ'ÿ±gß½ IÀzx¡Íª§3TÛTG¤j$õ²Ýtß01b++kÚù@»ì®Ëz¸VuPnc&'¥uþLûØa6HìoBQNÖ÷¾-õ5ªv{\f9mF'òöïÕßaeñã~Ã>äwqºPKävâû¸E8^lÈ½ãÅLV¬Ý¼Æt²ßM¶µóy²+aZ£®Köôû´ë~ÀyÏ]NE¬Ü°ïØ,¥v²=È?V_­#È&·3ÊÓU<ÿpGJûxï+7j¼p¹ÀÄiéM¢·MIÍ96^Í4µ÷}È7-\fùÍíÔdL¤õ­\x00åQpÙBeY!¯^®\r+7:îs×²p'täTuA«Rî º«X\nð£á5ïµó[c;éS`¿B^@ëµØTèáHóÂ¦t§nFö</ðü4¤êïrTse4uí'ÇÝVB}úâ«ïá,Nä¯³ù#e3äû TÇÅ7,F,~ñfÿ-Æõ( ¿6ÎßjË+jÙ\"PË9ûß«ÿÈ\x00ð\niN\fÌ¨\\\x00\x00\x00\x00IEND®B`",
			fxmg = "PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00´IDATHíV?oS1¿KRBÚD¨H¡T1À\nJù\x00|tdk§\fØÊ b#l²¶b@J×vA*ê?%%iDJzè.¶ßó{öKÕPYñ³Ïwçß6%Å}Ü}<Ä0Dðò=ÅÄm`?3°F \b;@PaíÉ6¢2ËÛÄ±a?³\fâ+yõOÚÓgTRÞ\fOsçx6;\föÎf\nU±Ü Pp*bFöã\n+Zògokâv£\bÄÄ­Kt?f]çÃ%&G¼Ërc¼c®nv¨á^zCë[ä/ÒÅyT¨ª¹F)Ð×íñ&ÈKã\bxìÇ½^d â9©¹<OöïKÕßYE<¼SOò7ß®zW[ù]j,Ôeì`¡.ÂMåÚ[$&Ïl Þ7ÕÖÍ})´Ð#ü¤3c³#Êt®£Æm´S£õ9[¶JÐìY¼÷ÒSÓüãðUßæÜR*¤UxþùºXûrë»XþtwæN\x00¶\x00ï¼h#Ùß³Ð<»±cÐ{ÜôÉ	#¶ø­í©ÂF¦úJ#àâE\f0\\Ê³£rB^½_ª6czÌ¹sa&[øËÕvº*F4hV	ÀwVLû<ÖÍ¾½cëdºØ*Óaè<Oûp¡\fíÜkSQ¸µsÜ¾:RUUø×ÔzÎâkßëµ5(ýDhçÇ+5BcY:X¯®C³ªÝt)¬ðB¿ó{@°(dÈ9£ ÞÄR#É;^óBmå7p7<ûfíxÓÆv^:tèð[éEB½¯2ð¾ê¶\b¨åÔùÏÕD\x00àªÅ¦v©\x00\x00\x00\x00IEND®B`";
		var bgGreen = [0, 1, 0],
			disableGreen = [0, 0.46, 0.03];

		for (var i in es_str) "zh_CN" == app.isoLanguage ?
			es_str[i] = es_str[i].cn :
			es_str[i] = es_str[i].en;

		function es_buildUI(thisObj) {
			var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", es_str.title + es_str.version, undefined, {
				closeOnKey: 'OSCmnd+W',
				resizeable: true
			});

			if (pal !== null) {
				var res = "group{orientation:'row',alignment:['fill','fill'],minimumSize:[580, 360],margins:-14,\
								leftPart:Group{orientation:'column',alignment:['fill','fill'],spacing:3,\
									listArea:ListBox{\
										alignment:['fill','fill'],\
										properties:{numberOfColumns:3,columnTitles:['#', '" + es_str.time + "', '" + es_str.content + "'],\
										showHeaders:true,multiselect:true}\
									},\
									buttonArea:Group{orientation:'row',alignment:['fill','bottom'],spacing:2,\
										info:IconButton{text:'?',alignment:['left','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'}},\
										preci:EditText{text:'1',characters:'2',alignment:['left','fill']},\
										olGroup:Group{alignment:['left','bottom'],orientation:'stack',margins:0,\
											olImage:Image{alignment:['center','fill'],size:[28, 28]}\
											olCheck:Checkbox{margins:0,alignment:['center','right']},\
										},\
										pickPos:IconButton{text:'☉',alignment:['left','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'}},\
										rmMarker:IconButton{text:'⌫',alignment:['left','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'}},\
										\
										lineNum:EditText{text:'0',characters:'2',alignment:['right','fill']},\
										killTag:IconButton{text:'⌧',alignment:['right','fill'],\
											preferredSize:[28, 28],helpTip:'batch remove tags',\
											properties:{style:'toolbutton'}},\
										killOther:IconButton{text:'⒳',alignment:['right','fill'],\
											preferredSize:[28, 28],helpTip:'batch remove other',\
											properties:{style:'toolbutton'}},\
										resel:IconButton{text:'↻',alignment:['right','fill'],\
											preferredSize:[28, 28],\
											properties:{style:'toolbutton'}},\
									}\
								},\
								RPparent:Group{orientation:'stack',alignment:['right','fill'],margins:[-20,2,0,0],\
									statusText:StaticText{alignment:['right','top'],\
										text:'',characters:'7'},\
								rightPart:Group{orientation:'column',alignment:['right','fill'],margins:[0,18,0,0],spacing:0,\
									editText:EditText{\
										text:'',alignment:['fill','fill'],\
										properties:{multiline:true,scrolling:false,borderless:false},\
									},\
									btGroup:Group{orientation:'column',alignment:['fill','bottom'],spacing:0,\
										bbt:Group{orientation:'row',spacing:2,alignment:['fill','fill'],\
											bButton:IconButton{text:'<b>',\
												properties:{style:'toolbutton'},preferredSize:[60,30]},\
											bsButton:IconButton{text:'</b>',\
												properties:{style:'toolbutton'},preferredSize:[60,30]},\
											bbButton:IconButton{text:'<b> </b>',\
												properties:{style:'toolbutton'},\
												preferredSize:[140,30]},\
											bbxButton:IconButton{text:'<b> </b>',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												preferredSize:[30,30]},\
										},\
										ibt:Group{orientation:'row',spacing:2,alignment:['fill','fill']\
											iButton:IconButton{text:'<i>',\
												properties:{style:'toolbutton'},preferredSize:[60,30]},\
											isButton:IconButton{text:'</i>',\
												properties:{style:'toolbutton'},preferredSize:[60,30]},\
											iiButton:IconButton{text:'<i>  </i>',\
												properties:{style:'toolbutton'},\
												preferredSize:[140,30]}\
											iixButton:IconButton{text:'<i>  </i>',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												preferredSize:[30,30]}\
										},\
										ubt:Group{orientation:'row',spacing:2,alignment:['fill','fill']\
											uButton:IconButton{text:'<u>',\
												properties:{style:'toolbutton'},preferredSize:[60,30]},\
											usButton:IconButton{text:'</u>',\
												properties:{style:'toolbutton'},preferredSize:[60,30]},\
											uuButton:IconButton{text:'<u> </u>',\
												properties:{style:'toolbutton'},\
												preferredSize:[140,30]}\
											uuxButton:IconButton{text:'<u> </u>',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												preferredSize:[30,30]}\
										},\
										sbt:Group{orientation:'row',spacing:2,alignment:['fill','fill']\
											sButton:IconButton{text:'<s>',\
												properties:{style:'toolbutton'},preferredSize:[60,30]},\
											ssButton:IconButton{text:'</s>',\
												properties:{style:'toolbutton'},preferredSize:[60,30]},\
											sssButton:IconButton{text:'<s>  </s>',\
												properties:{style:'toolbutton'},\
												preferredSize:[140,30]}\
											ssxButton:IconButton{text:'<s>  </s>',alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												preferredSize:[30,30]}\
										},\
										fbt:Group{orientation:'row',alignment:['fill','fill'],spacing:0,\
											fsButton:IconButton{text:'<font size=20>',\
												properties:{style:'toolbutton'},\
												preferredSize:[100,30]},\
											fsValue:EditText{text:'20',characters:'2'},\
											fcButton:IconButton{text:'<font color=00FF00>',\
												properties:{style:'toolbutton'},\
												preferredSize:[100,30]},\
											fcValue:Button{preferredSize:[40,30]},\
											fxButton:IconButton{alignment:['fill','fill'],\
												properties:{style:'toolbutton'},\
												preferredSize:[30,30]},\
										},\
										midGroup:Group{orientation:'row',alignment:['fill','fill'],margins:0,\
											position:Group{orientation:'column',alignment:['left','fill'],spacing:0,\
												upbt:Group{orientation:'row',alignment:['left','top'],spacing:0,\
													ulButton:IconButton{text:'↖',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}},\
													ucButton:IconButton{text:'⇡',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}},\
													urButton:IconButton{text:'↗',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}}\
												},\
												mdbt:Group{orientation:'row',alignment:['left','top'],spacing:0,\
													mlButton:IconButton{text:'⇠',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}},\
													mcButton:IconButton{text:'●',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}},\
													mrButton:IconButton{text:'⇢',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}}\
												},\
												bobt:Group{orientation:'row',alignment:['left','top'],spacing:0,\
													blButton:IconButton{text:'↙',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}},\
													bcButton:IconButton{text:'☻',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}},\
													brButton:IconButton{text:'↘',\
														preferredSize:[30,30],\
														properties:{style:'toolbutton'}}\
												},\
											},\
											extraPo:Group{orientation:'column',alignment:['fill','fill'],spacing:0,\
												pos:Group{orientation:'row',alignment:['fill','fill'],\
													posButton:IconButton{text:'',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}},\
													textX:StaticText{text:'x:'},\
													posX:EditText{text:'192',alignment:['fill','center']},\
													textY:StaticText{text:'y:'},\
													posY:EditText{text:'144',alignment:['fill','center']},\
												},\
												fade:Group{orientation:'row',alignment:['fill','fill'],\
													fadButton:IconButton{text:'',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}},\
													inText:StaticText{text:'in:'},\
													fadIn:EditText{text:'300',characters:2,alignment:['fill','center']},\
													outText:StaticText{text:'out:'},\
													fadOut:EditText{text:'300',characters:2,alignment:['fill','center']},\
												},\
												other:Group{orientation:'row',alignment:['fill','fill'],spacing:0,\
													bord:IconButton{text:'',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}},\
													metri:IconButton{text:'',\
														preferredSize:[50,30],\
														properties:{style:'toolbutton'}},\
													blur:IconButton{text:'',\
														preferredSize:[40,30],\
														properties:{style:'toolbutton'}},\
													bfbVal:EditText{text:'2',alignment:['fill','center']},\
												},\
											}\
										},\
										fix:Group{orientation:'row',alignment:['fill','fill'],margins:0,\
												direct: Group {orientation:'row',alignment:['fill','fill'],spacing:0,\
													customImageViewer: Custom { type:'customView', alignment:['left','fill'],preferredSize:[35,30]},\
													vertical: Checkbox {text:'',alignment:['left','bottom']},\
												},\
												move:Group{orientation:'row',alignment:['right','fill'],spacing:0,\
													moveButton:IconButton{text:'',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}},\
													x1:EditText{text:'384',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + "},\
													y1:EditText{text:'144',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + "},\
													x2:EditText{text:'-50',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + "},\
													y2:EditText{text:'144',characters:" + (($.os.indexOf("Win") != -1) ? "2" : "3") + "},\
													moveIn:EditText{text:'0',characters:" + (($.os.indexOf("Win") != -1) ? "3" : "4") + "},\
													moveOut:EditText{text:'3000',characters:" + (($.os.indexOf("Win") != -1) ? "3" : "4") + "},\
												},\
										}\
										rebtGroup:Group{orientation:'row',alignment:['fill','bottom'],spacing:0,\
											rfButton:IconButton{text:'" + es_str.refresh + "',alignment:['fill','fill'],\
												properties:{style:'toolbutton'}},\
											epButton:IconButton{text:'" + es_str.xport + "',alignment:['fill','fill'],\
												properties:{style:'toolbutton'}}\
										}\
									}\
								}}\
							}";


				var es_help = function () {
					var res = "group {orientation:'column', alignment:['fill','fill'], alignChildren:['fill','fill'],\
							pnl: Panel {type:'tabbedpanel',\
								aboutTab: Panel { type:'tab', text:'" + es_str.descript + "',\
									aboutEt: EditText { text:'" + es_str.desContent + "', preferredSize:[280,120], properties:{multiline:true,readonly:true}}\
									},\
								usageTab: Panel { type:'tab', text:'" + es_str.usage + "',\
									usageEt: EditText { text:'" + es_str.useContent + "', preferredSize:[280,120], properties:{multiline:true,readonly:true}}\
									}\
							},\
							btns: Group {orientation:'row', alignment:['fill','bottom'],\
								otherScriptsBtn: Button { text:'" + es_str.other + "', alignment:['left','center'] },\
								okBtn: Button { text:'" + es_str.close + "', alignment:['right','center'] }\
							}\
						}";
					var helpWin = new Window("palette", es_str.about);
					helpWin.gr = helpWin.add(res);
					helpWin.gr.btns.otherScriptsBtn.onClick = function () {
						var cmd = "";
						var url = es_str.website;
						if ($.os.indexOf("Win") != -1) {
							if (File("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe").exists) {
								cmd += "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe " + url;
							} else if (File("C:/Program Files (x86)/Mozilla Firefox/firefox.exe").exists) {
								cmd += "C:/Program Files (x86)/Mozilla Firefox/firefox.exe " + url;
							} else {
								cmd += "C:/Program Files/Internet Explorer/iexplore.exe " + url;
							}
						} else {
							cmd += "open " + url;
						}
						try {
							system.callSystem(cmd);
						} catch (e) {
							alert(e);
						}
					};
					helpWin.gr.btns.okBtn.onClick = function () {
						helpWin.close();
					};
					helpWin.center();
					helpWin.show();
				};
				pal.grp = pal.add(res);
				pal.layout.layout(true);
				// pal.grp.minimumSize = pal.grp.size;
				pal.layout.resize();
				pal.onResizing = pal.onResize = function () {
					this.layout.resize();
				};

				// var textGreen = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, [0, 1, 0], 1);


				pal.grp.leftPart.listArea.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);
				pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.colorHex = "00FF00";
				// pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.fillBrush = pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);
				pal.grp.RPparent.statusText.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);

				pal.grp.leftPart.listArea.onChange = function () {
					pal.grp.RPparent.rightPart.editText.backupSelection = "";
					// pal.grp.RPparent.rightPart.editText.active = !0;
					var i = this.selection[0].index;
					comp.time = comp.layer(slIndex[i]).outPoint - markerTimeOffset / comp.frameRate;
					pal.grp.RPparent.rightPart.editText.text = comp.layer(slIndex[i]).property("Marker").valueAtTime(comp.layer(slIndex[i]).outPoint - markerTimeOffset / comp.frameRate, !0).comment.replace(reg, "\r");
				};
				pal.grp.leftPart.buttonArea.info.onClick = function () {
					es_help();
				};
				pal.grp.leftPart.buttonArea.resel.onClick = function () {
					var curComp = app.project.activeItem,
						curSel = curComp.selectedLayers;
					for (var o = 0; o < curSel.length; o++) {
						curSel[o].selected = !1;
					};
					for (var i = 0; i < sl.length; i++) {
						sl[i].selected = !0;
					}
				};
				pal.grp.leftPart.buttonArea.pickPos.onClick = function () {
					var curComp = app.project.activeItem;
					try {
						var curSel = curComp.selectedLayers,
							posX = Math.round(curSel[0].property("transform").property("Position").value[0] / curComp.width * 384),
							posY = Math.round(curSel[0].property("transform").property("Position").value[1] / curComp.height * 288);
					} catch (e) {}

					alert(1 != curSel.length || curSel[0].threeDLayer ?
						es_str.er2dlayer :
						"x:" + posX + " y:" + posY + "\n" + es_str.srtXY);

				};
				pal.grp.leftPart.buttonArea.killOther.onClick = function () {
					triggerMarker(pal, "", "", "", "", ["", "", "", ""], null, null, !1, this.parent.lineNum.text);
				};
				pal.grp.leftPart.buttonArea.killTag.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", !0, this.parent.lineNum.text, null, /(<\/?(\s|\S)*?>)/g);
				};
				pal.grp.leftPart.buttonArea.rmMarker.onClick = function () {
					var rsl = comp.selectedLayers;
					rsl.length == 0 ? alert(es_str.markOnly) : pal.grp.leftPart.listArea.removeAll();
					removeESmarker(rsl);
				};
				pal.grp.leftPart.buttonArea.preci.onChange = function () {
					this.text = validNum(this.text, 1, this.text <= 0);
				};
				pal.grp.leftPart.buttonArea.lineNum.onChange = function () {
					this.text = validNum(this.text, 0, this.text < 0);
				};
				pal.grp.RPparent.rightPart.editText.addEventListener('mouseout', function () {
					this.backupSelection = this.textselection;
				});
				// pal.grp.RPparent.rightPart.editText.addEventListener('keydown', function (k) {
				// 	if(k.keyName==="Enter")triggerMarker(pal, null, null, null, null, [])
				// 	fixList(pal.grp.leftPart.listArea)
				// });
				if (-1 != $.os.indexOf("Win")) {
					pal.grp.RPparent.rightPart.editText.onChange = function () {
						triggerMarker(pal, null, null, null, null, []);
					}
				} else {
					pal.grp.RPparent.rightPart.editText.onChanging = function () {
						triggerMarker(pal, null, null, null, null, []);
					}
				};

				// pal.addEventListener("keydown", function () {

				// 	try {
				// 		alert(pal.grp.leftPart.listArea.columns.titles)
				// 		// fixList(pal.grp.leftPart.listArea)

				// 		// alert(pal.grp.leftPart.listArea.columns.titles[0]) 
				// 	} catch (e) {
				// 		alert(e)
				// 	}
				// })
				pal.addEventListener("keydown", function (kd) {
					pressed(kd, this)
				})

				pal.grp.RPparent.rightPart.btGroup.bbt.bButton.onClick = function () {
					pal.grp.RPparent.statusText.text = "copied " + this.text;
					runCommand("b");
					showText(pal, "copied " + this.text, 1000, 1)
				};
				pal.grp.RPparent.rightPart.btGroup.bbt.bsButton.onClick = function () {
					pal.grp.RPparent.statusText.text = "copied " + this.text;
					runCommand("/b");
					showText(pal, "copied " + this.text, 1000, 1)
				};
				pal.grp.RPparent.rightPart.btGroup.ibt.iButton.onClick = function () {
					pal.grp.RPparent.statusText.text = "copied " + this.text;
					runCommand("i");
					showText(pal, "copied " + this.text, 1000, 1)
				};
				pal.grp.RPparent.rightPart.btGroup.ibt.isButton.onClick = function () {
					pal.grp.RPparent.statusText.text = "copied " + this.text;
					runCommand("/i");
					showText(pal, "copied " + this.text, 1000, 1)
				};
				pal.grp.RPparent.rightPart.btGroup.ubt.uButton.onClick = function () {
					pal.grp.RPparent.statusText.text = "copied " + this.text;
					runCommand("u");
					showText(pal, "copied " + this.text, 1000, 1)
				};
				pal.grp.RPparent.rightPart.btGroup.ubt.usButton.onClick = function () {
					pal.grp.RPparent.statusText.text = "copied " + this.text;
					runCommand("/u");
					showText(pal, "copied " + this.text, 1000, 1)
				};
				pal.grp.RPparent.rightPart.btGroup.sbt.sButton.onClick = function () {
					pal.grp.RPparent.statusText.text = "copied " + this.text;
					runCommand("s");
					showText(pal, "copied " + this.text, 1000, 1)
				};
				pal.grp.RPparent.rightPart.btGroup.sbt.ssButton.onClick = function () {
					pal.grp.RPparent.statusText.text = "copied " + this.text;
					runCommand("/s");
					showText(pal, "copied " + this.text, 1000, 1)
				};
				pal.grp.RPparent.rightPart.btGroup.bbt.bbButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "b", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.RPparent.rightPart.btGroup.bbt.bbxButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(b)*?>)/g);
				};
				pal.grp.RPparent.rightPart.btGroup.ibt.iiButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "i", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.RPparent.rightPart.btGroup.ibt.iixButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(i)*?>)/g);
				};
				pal.grp.RPparent.rightPart.btGroup.sbt.sssButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "s", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.RPparent.rightPart.btGroup.sbt.ssxButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(s)*?>)/g);
				};
				pal.grp.RPparent.rightPart.btGroup.ubt.uuButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "u", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.RPparent.rightPart.btGroup.ubt.uuxButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(u)*?>)/g);
				};
				pal.grp.RPparent.rightPart.btGroup.fbt.fsButton.onClick = function () {
					var keyString = " size=" + this.parent.fsValue.text;
					triggerMarker(pal, null, null, null, null, [], "font", keyString, !1, pal.grp.leftPart.buttonArea.lineNum.text)
				};
				pal.grp.RPparent.rightPart.btGroup.fbt.fcButton.onClick = function () {
					var keyString = " color=" + fixBlueHex(this.parent.fcValue.colorHex);
					triggerMarker(pal, null, null, null, null, [], "font", keyString, !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.onDraw = function () {
					this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
					this.graphics.fillPath(this.fillBrush);
				};
				pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.onClick = function () {
					var origin = this.colorHex;
					var colorString = $.colorPicker();
					this.colorHex = colorString == -1 ? origin : colorString.toString(16).toUpperCase();
					// this.parent.fcButton.text = "<font color=" + fixBlueHex(this.colorHex) + ">";
					this.fillBrush = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, hexToRgb(this.colorHex));
				};
				pal.grp.RPparent.rightPart.btGroup.fbt.fxButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", !0, pal.grp.leftPart.buttonArea.lineNum.text, null, /(<\/?(font\s?.*?)>)/g);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.blButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an3}", "{\\pos(0,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an1}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.bcButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an6}", "{\\pos(192,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an2}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.brButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an9}", "{\\pos(384,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an3}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mlButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an2}", "{\\pos(0,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an4}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mcButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an5}", "{\\pos(192,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an5}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mrButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an8}", "{\\pos(384,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an6}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ulButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an1}", "{\\pos(0,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an7}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ucButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an4}", "{\\pos(192,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an8}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.urButton.onClick = function () {
					pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an7}", "{\\pos(384,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an9}", "", "", null, [], null, null, !1);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posButton.onClick = function () {
					var px = this.parent.posX.text,
						py = this.parent.posY.text;

					triggerMarker(pal, null, "{\\pos(" + px + "," + py + ")}", null, null, [], null, null, !1, null, true);

				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadButton.onClick = function () {
					var fIn = this.parent.fadIn.text,
						fOut = this.parent.fadOut.text;
					triggerMarker(pal, null, null, null, "{\\fad(" + fIn + "," + fOut + ")}", [], null, null, !1, null, true);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.bord.onClick = function () {
					var bordVar = "{\\bord(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [bordVar], null, null, !1, null, true);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.metri.onClick = function () {
					var fspVar = "{\\fsp(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [, fspVar], null, null, !1, null, true);
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.blur.onClick = function () {
					var blurVar = "{\\be(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [, , blurVar], null, null, !1, null, true);
				};
				pal.grp.RPparent.rightPart.btGroup.fix.move.moveButton.onClick = function () {
					var x1 = this.parent.x1.text,
						y1 = this.parent.y1.text,
						x2 = this.parent.x2.text,
						y2 = this.parent.y2.text,
						moveIn = this.parent.moveIn.text,
						moveOut = this.parent.moveOut.text,
						moveVar = "{\\move(" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + moveIn + "," + moveOut + ")}";
					triggerMarker(pal, null, null, null, null, [, , , moveVar], null, null, !1, null, true)
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.bfbVal.onChange = function () {
					this.text = validNum(this.text, 2);
					// this.parent.bord.text = "{\\bord(" + this.text + ")}";
					// this.parent.metri.text = "{\\fsp(" + this.text + ")}";
					// this.parent.blur.text = "{\\be(" + this.text + ")}";
				};
				pal.grp.RPparent.rightPart.btGroup.fbt.fsValue.onChange = function () {
					this.text = validNum(this.text, 20);
					// this.parent.fsButton.text = "<font size=" + this.text + ">";
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posX.onChange = function () {
					this.text = validNum(this.text, 192);
					// this.parent.posButton.text = "{\\pos(" + this.text + "," + this.parent.posY.text + ")}";
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posY.onChange = function () {
					this.text = validNum(this.text, 144);
					// this.parent.posButton.text = "{\\pos(" + this.parent.posX.text + "," + this.text + ")}";
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadIn.onChange = function () {
					this.text = validNum(this.text, 300, this.text < 0);
					// this.parent.fadButton.text = "{\\fad(" + this.text + "," + this.parent.fadOut.text + ")}";
				};
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadOut.onChange = function () {
					this.text = validNum(this.text, 300, this.text < 0);
					// this.parent.fadButton.text = "{\\fad(" + this.parent.fadIn.text + "," + this.text + ")}";
				};
				pal.grp.RPparent.rightPart.btGroup.fix.move.x1.onChange = function () {
					this.text = validNum(this.text, 384);
				};
				pal.grp.RPparent.rightPart.btGroup.fix.move.y1.onChange = function () {
					this.text = validNum(this.text, 144);
				};
				pal.grp.RPparent.rightPart.btGroup.fix.move.x2.onChange = function () {
					this.text = validNum(this.text, -50);
				};
				pal.grp.RPparent.rightPart.btGroup.fix.move.y2.onChange = function () {
					this.text = validNum(this.text, -144);
				};
				pal.grp.RPparent.rightPart.btGroup.fix.move.moveIn.onChange = function () {
					this.text = validNum(this.text, 0, this.text < 0);
				};
				pal.grp.RPparent.rightPart.btGroup.fix.move.moveOut.onChange = function () {
					this.text = validNum(this.text, 3000, this.text < 0);
				};
				pal.grp.RPparent.rightPart.btGroup.rebtGroup.rfButton.onClick = function () {
					pal.grp.RPparent.rightPart.editText.text = "";
					refreshButton(pal);
					fixList(pal.grp.leftPart.listArea);
				};
				pal.grp.RPparent.rightPart.btGroup.rebtGroup.epButton.onClick = function () {
					writeSrt(pal.grp.leftPart.listArea.items);
				};
				pal.grp.leftPart.buttonArea.olGroup.olImage.image = ScriptUI.newImage(olmg);
				pal.grp.RPparent.rightPart.btGroup.fix.direct.customImageViewer.image = ScriptUI.newImage(nwve);


				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.bord.helpTip = es_str.bordHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.metri.helpTip = es_str.metriHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.blur.helpTip = es_str.blurHelp;
				pal.grp.RPparent.rightPart.btGroup.fix.direct.vertical.helpTip = es_str.verticalHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posButton.helpTip = es_str.posHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posX.helpTip = es_str.srtXY
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posY.helpTip = es_str.srtXY
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadButton.helpTip = es_str.fadHelp;
				pal.grp.RPparent.rightPart.btGroup.fix.move.moveButton.helpTip = es_str.mvHelp;
				pal.grp.RPparent.rightPart.btGroup.rebtGroup.rfButton.helpTip = es_str.rfHelp;
				pal.grp.RPparent.rightPart.btGroup.rebtGroup.epButton.helpTip = es_str.epHelp;
				pal.grp.RPparent.rightPart.btGroup.fbt.fcButton.helpTip = es_str.fcHelp;
				pal.grp.RPparent.rightPart.btGroup.bbt.bbButton.helpTip = es_str.bbHelp;
				pal.grp.RPparent.rightPart.btGroup.ibt.iiButton.helpTip = es_str.iiHelp;
				pal.grp.RPparent.rightPart.btGroup.sbt.sssButton.helpTip = es_str.sssHelp;
				pal.grp.RPparent.rightPart.btGroup.ubt.uuButton.helpTip = es_str.uuHelp;
				pal.grp.RPparent.rightPart.btGroup.fbt.fsButton.helpTip = es_str.fsHelp;
				pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.helpTip = es_str.fcvalueHelp;

				pal.grp.leftPart.buttonArea.info.helpTip = es_str.infoHelp;
				pal.grp.leftPart.buttonArea.resel.helpTip = es_str.reselHelp;
				pal.grp.leftPart.buttonArea.pickPos.helpTip = es_str.pickposHelp;
				pal.grp.leftPart.buttonArea.killOther.helpTip = es_str.killotherHelp;
				pal.grp.leftPart.buttonArea.killTag.helpTip = es_str.killtagHelp;
				pal.grp.leftPart.buttonArea.rmMarker.helpTip = es_str.rmmarkHelp;
				pal.grp.leftPart.buttonArea.preci.helpTip = es_str.preciHelp;
				pal.grp.leftPart.buttonArea.lineNum.helpTip = es_str.linenumHelp;
				pal.grp.leftPart.buttonArea.olGroup.olCheck.helpTip = es_str.olcheckHelp;
				pal.grp.RPparent.rightPart.btGroup.fix.move.x1.helpTip = es_str.srtXY;
				pal.grp.RPparent.rightPart.btGroup.fix.move.y1.helpTip = es_str.srtXY;
				pal.grp.RPparent.rightPart.btGroup.fix.move.x2.helpTip = es_str.srtXY;
				pal.grp.RPparent.rightPart.btGroup.fix.move.y2.helpTip = es_str.srtXY;
				pal.grp.RPparent.rightPart.btGroup.fix.move.moveIn.helpTip = es_str.msHelp;
				pal.grp.RPparent.rightPart.btGroup.fix.move.moveOut.helpTip = es_str.msHelp;
				pal.grp.RPparent.rightPart.btGroup.bbt.bButton.helpTip = es_str.bHelp;
				pal.grp.RPparent.rightPart.btGroup.ibt.iButton.helpTip = es_str.iHelp;
				pal.grp.RPparent.rightPart.btGroup.ubt.uButton.helpTip = es_str.uHelp;
				pal.grp.RPparent.rightPart.btGroup.sbt.sButton.helpTip = es_str.sHelp;
				pal.grp.RPparent.rightPart.btGroup.bbt.bsButton.helpTip = es_str.bsHelp;
				pal.grp.RPparent.rightPart.btGroup.ibt.isButton.helpTip = es_str.isHelp;
				pal.grp.RPparent.rightPart.btGroup.ubt.usButton.helpTip = es_str.usHelp;
				pal.grp.RPparent.rightPart.btGroup.sbt.ssButton.helpTip = es_str.ssHelp;

				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.blButton.helpTip = es_str.blHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.bcButton.helpTip = es_str.bcHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.brButton.helpTip = es_str.brHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mlButton.helpTip = es_str.mlHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mcButton.helpTip = es_str.mcHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mrButton.helpTip = es_str.mrHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ulButton.helpTip = es_str.ulHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ucButton.helpTip = es_str.ucHelp;
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.urButton.helpTip = es_str.urHelp;

				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadIn.helpTip = es_str.msHelp
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadOut.helpTip = es_str.msHelp

				pal.grp.leftPart.buttonArea.pickPos.image = ScriptUI.newImage(pimg)
				pal.grp.leftPart.buttonArea.rmMarker.image = ScriptUI.newImage(cimg)
				pal.grp.leftPart.buttonArea.resel.image = ScriptUI.newImage(dimg)
				pal.grp.leftPart.buttonArea.killTag.image = ScriptUI.newImage(eimg)
				pal.grp.leftPart.buttonArea.killOther.image = ScriptUI.newImage(fimg)
				pal.grp.leftPart.buttonArea.info.image = ScriptUI.newImage(gimg)
				pal.grp.RPparent.rightPart.btGroup.rebtGroup.rfButton.image = ScriptUI.newImage(himg)
				pal.grp.RPparent.rightPart.btGroup.rebtGroup.epButton.image = ScriptUI.newImage(iimg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.blButton.image = ScriptUI.newImage(zzmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.bcButton.image = ScriptUI.newImage(ssmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.bobt.brButton.image = ScriptUI.newImage(ccmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mlButton.image = ScriptUI.newImage(aamg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mcButton.image = ScriptUI.newImage(xxmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.mdbt.mrButton.image = ScriptUI.newImage(ddmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ulButton.image = ScriptUI.newImage(qqmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.ucButton.image = ScriptUI.newImage(wwmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.position.upbt.urButton.image = ScriptUI.newImage(eemg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.pos.posButton.image = ScriptUI.newImage(posmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.fade.fadButton.image = ScriptUI.newImage(fadmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.bord.image = ScriptUI.newImage(bordmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.metri.image = ScriptUI.newImage(fspmg)
				pal.grp.RPparent.rightPart.btGroup.midGroup.extraPo.other.blur.image = ScriptUI.newImage(bemg)
				pal.grp.RPparent.rightPart.btGroup.fix.move.moveButton.image = ScriptUI.newImage(movemg)
				pal.grp.RPparent.rightPart.btGroup.fbt.fsButton.image = ScriptUI.newImage(fsmg)
				pal.grp.RPparent.rightPart.btGroup.fbt.fcButton.image = ScriptUI.newImage(fcmg)
				pal.grp.RPparent.rightPart.btGroup.fbt.fxButton.image = ScriptUI.newImage(fxmg)
				pal.grp.RPparent.rightPart.btGroup.bbt.bButton.image = ScriptUI.newImage(b1mg)
				pal.grp.RPparent.rightPart.btGroup.bbt.bsButton.image = ScriptUI.newImage(bs1mg)
				pal.grp.RPparent.rightPart.btGroup.bbt.bbButton.image = ScriptUI.newImage(bb1mg)
				pal.grp.RPparent.rightPart.btGroup.bbt.bbxButton.image = ScriptUI.newImage(bxmg)
				pal.grp.RPparent.rightPart.btGroup.sbt.sButton.image = ScriptUI.newImage(s1mg)
				pal.grp.RPparent.rightPart.btGroup.sbt.ssButton.image = ScriptUI.newImage(ss1mg)
				pal.grp.RPparent.rightPart.btGroup.sbt.ssxButton.image = ScriptUI.newImage(sxmg)
				pal.grp.RPparent.rightPart.btGroup.sbt.sssButton.image = ScriptUI.newImage(sss1mg)
				pal.grp.RPparent.rightPart.btGroup.ibt.iButton.image = ScriptUI.newImage(i1mg)
				pal.grp.RPparent.rightPart.btGroup.ibt.isButton.image = ScriptUI.newImage(is1mg)
				pal.grp.RPparent.rightPart.btGroup.ibt.iiButton.image = ScriptUI.newImage(ii1mg)
				pal.grp.RPparent.rightPart.btGroup.ibt.iixButton.image = ScriptUI.newImage(ixmg)
				pal.grp.RPparent.rightPart.btGroup.ubt.uButton.image = ScriptUI.newImage(u1mg)
				pal.grp.RPparent.rightPart.btGroup.ubt.usButton.image = ScriptUI.newImage(us1mg)
				pal.grp.RPparent.rightPart.btGroup.ubt.uuButton.image = ScriptUI.newImage(uu1mg)
				pal.grp.RPparent.rightPart.btGroup.ubt.uuxButton.image = ScriptUI.newImage(uxmg)


			}
			return pal;
		}

		function mouseEventHandler() {

			if ($.os.indexOf("Win") != -1) {
				vbs.execute();
				// var cmdcmd ="";
				// cmdcmd += "cmd.exe /c cmd.exe /c \"powershell -Command \"$wshell = New-Object -ComObject wscript.shell;$wshell.SendKeys('^v')\""
				// system.callSystem(cmdcmd);
			} else {
				var cmd = "";
				cmd += "osascript -e \'tell application \"System Events\" to keystroke \"v\" using {command down}\'";
				system.callSystem(cmd);
			}

			this.removeEventListener("mouseout", mouseEventHandler);
		}

		function sortLayers(layers) {
			return layers.sort(function (a, b) {
				return a.inPoint - b.inPoint;
			});
		}

		function checkOverlap(layers) {
			for (var result = !1, a = 1; a < layers.length; a++) layers[a].selected = !0, parseFloat(layers[a].inPoint) < parseFloat(layers[a - 1].outPoint) && (result = !0, layers[a].selected = !1);
			try {
				layers[0].selected = !0;
			} catch (d) {}
			if (result)
				for (a = 0; a < layers.length; a++) layers[a].selected = !layers[a].selected;
			return result;
		}

		function writeSrt(list) {
			var srtFile = File.saveDialog(es_str.saveDialog);
			srtFile.encoding = "utf-8", srtFile.open("w");
			srtFile.write("0\r00:00:00,000 --> 00:00:00,000\rsongzmeng srt export" + "\r\r");
			for (var r = 0; r < list.length; r++) srtFile.write(list[r].text + "\r" + list[r].subItems[0].text + "\r" + list[r].subItems[1].text + "\r\r");
			return srtFile.close(), srtFile;
		}

		function writeFile(fileObj, fileContent, encoding) {
			encoding = encoding || "utf-8";
			fileObj = (fileObj instanceof File) ? fileObj : new File(fileObj);

			var parentFolder = fileObj.parent;
			if (!parentFolder.exists && !parentFolder.create())
				throw new Error("Cannot create file in path " + fileObj.fsName);
			fileObj.encoding = encoding;
			fileObj.open("w");
			fileObj.write(fileContent);
			fileObj.close();
			return fileObj;
		}

		function pressed(k, pal) {
			if (k.keyName == "Z" && k.metaKey) {
				// alert(123)
				app.executeCommand(16);
				pal.grp.leftPart.buttonArea.resel.notify("onClick");
				pal.grp.RPparent.rightPart.btGroup.rebtGroup.rfButton.notify("onClick");
			};
		}

		function checkTextLayer(layers) {

			if (0 == layers.length) {
				alert(es_str.noLayer)

				return !1;
			} else {
				for (var b = 0; b < layers.length; b++) {
					if (!(layers[b] instanceof TextLayer)) {
						alert(es_str.textOnly);
						return !1;
					}
				}
				return !0;
			}
			// return !0;

		}

		function removeESmarker(layers) {
			app.beginUndoGroup(es_str.title);
			for (var i = 0; i < layers.length; i++) {
				if (checkMarker(layers[i])) {
					var markerIndex = layers[i].property("Marker").nearestKeyIndex(layers[i].outPoint - markerTimeOffset / comp.frameRate);
					layers[i].property("Marker").removeKey(markerIndex);
				}
			}
			app.endUndoGroup();
		}

		function triggerMarker(pal, poVar, posVar, orientVar, fadeVar, otherVar, key, arg, remove, lineNum, poDef, rmReg) {
			app.beginUndoGroup(es_str.title);
			for (var i = 0; i < pal.grp.leftPart.listArea.selection.length; i++) {
				var listIndex = pal.grp.leftPart.listArea.selection[i].index,
					esMarker = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true),
					markComment = (key == null && poVar == null && posVar == null && orientVar == null && fadeVar == null && otherVar.length == 0) ?
					String(pal.grp.RPparent.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) :
					(remove ?
						removeQuote(esMarker.comment, newlineMark, lineNum, rmReg) :
						quoteText(esMarker.comment.replace(/\n|\r/gm, newlineMark), newlineMark, lineNum, pal.grp.RPparent.rightPart.editText.backupSelection, key, arg)),
					chapVar = (poVar == null) ? (poDef ? (esMarker.chapter == "" ? "{\\an2}" : esMarker.chapter) : esMarker.chapter) : poVar,
					urlVar = (posVar == null) ? esMarker.url : posVar,
					frameTargetVar = (orientVar == null) ? esMarker.frameTarget : orientVar,
					cuePointNameVar = (fadeVar == null) ? esMarker.cuePointName : fadeVar,
					paramsVar = {};
				paramsVar.bord = (otherVar[0] == null) ?
					(esMarker.getParameters().bord == void 0 ? "" : esMarker.getParameters().bord) :
					otherVar[0];
				paramsVar.fsp = (otherVar[1] == null) ?
					(esMarker.getParameters().fsp == void 0 ? "" : esMarker.getParameters().fsp) :
					otherVar[1];
				paramsVar.be = (otherVar[2] == null) ?
					(esMarker.getParameters().be == void 0 ? "" : esMarker.getParameters().be) :
					otherVar[2];
				paramsVar.move = (otherVar[3] == null) ?
					(esMarker.getParameters().move == void 0 ? "" : esMarker.getParameters().move) :
					otherVar[3];
				var markValue = new MarkerValue(markComment, chapVar, urlVar, frameTargetVar, cuePointNameVar, paramsVar);
				comp.layer(slIndex[listIndex]).property("Marker").setValueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, markValue);
				//re assign cause setValueAtTime()
				var esMarker2 = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true);
				pal.grp.leftPart.listArea.selection[i].subItems[1].text =
					esMarker2.chapter +
					esMarker2.url +
					esMarker2.frameTarget +
					esMarker2.cuePointName +
					esMarker2.getParameters().bord +
					esMarker2.getParameters().fsp +
					esMarker2.getParameters().be +
					esMarker2.getParameters().move +
					esMarker2.comment.replace(reg, "\r");
				pal.grp.RPparent.rightPart.editText.text = esMarker2.comment.replace(reg, "\r");
			}
			app.endUndoGroup();
			fixList(pal.grp.leftPart.listArea);
		}

		function showText(pal, argument, time, count) {
			var xx = 0;
			var ccr = app.scheduleTask("checkStatus()", time, true);

			checkStatus = function () {
				if (xx < count) {
					// alert(xx);
					pal.grp.RPparent.statusText.text = argument;
					xx++;
				} else {
					pal.grp.RPparent.statusText.text = "";
					app.cancelTask(ccr)
				}
			}

		}

		function runCommand(arg) {
			var cmds = "";
			var sysarg = ($.os.indexOf("Win") != -1) ? "^^^<" + arg + "^^^>" :
				"<" + arg + ">";
			var syscmd = ($.os.indexOf("Win") != -1) ?
				"echo | set /p= " + sysarg + "|clip" :
				"printf \"" + sysarg + "\"|pbcopy";
			cmds += syscmd;
			if ($.os.indexOf("Win") != -1) {
				var echoClip = new File(Folder.temp.toString() + encodeURI("/echoClip.bat"));
				writeFile(echoClip, cmds);
			}

			if ($.os.indexOf("Win") != -1) {
				echoVbs.execute();
			} else {
				system.callSystem(cmds);
			}
		}

		function quoteText(origin, splitor, lineNum, textSel, key, arg) {
			function u(origin, textSel, key, arg) {
				var quotesel = null !== key ? "<" + key + arg + ">" + textSel + "</" + key + ">" : textSel,
					originsel = null !== key ? "<" + key + arg + ">" + origin + "</" + key + ">" : origin;
				return 0 != textSel ? origin.replace(textSel, quotesel) : origin.replace(origin, originsel);
			}
			if (0 == lineNum) return u(origin, textSel, key, arg);
			if (void 0 !== origin.split(splitor)[lineNum - 1]) {
				var o = origin.split(splitor);
				return o[lineNum - 1] = u(o[lineNum - 1], textSel, key, arg), o = o.join(splitor);
			}
			return void 0 == origin.split(splitor)[lineNum - 1] ? origin : void 0;
		}

		function removeQuote(comment, splitor, lineNum, reg) {
			// var reg = /(<\/?(\s|\S)*?>)/g;
			if (void 0 !== comment.split(splitor)[lineNum - 1]) {
				var tmpArray = comment.split(splitor);
				return tmpArray[lineNum - 1] = tmpArray[lineNum - 1].replace(reg, ""), tmpArray = tmpArray.join(splitor);
			}
			if (0 == lineNum) return comment.replace(reg, "");
		}

		function time2code(frames, fps, precision) {
			var timeTpye = app.project.timeDisplayType,
				t = frames < 0 ? 0 : frames;
			app.project.timeDisplayType = 2012;
			var timecode = timeToCurrentFormat(t, fps),
				ms = Math.floor(timecode.substr(-fps.toFixed().toString().length) / fps * 1e3 / precision) * precision;
			for (ms = ms.toString(); ms.length < 3;) ms = 0 + ms;
			app.project.timeDisplayType = timeTpye;
			return timecode.substr(0, timecode.length - fps.toFixed().toString().length - 1) + "," + ms;
		}

		function checkMarker(layer) {
			var timeType = app.project.timeDisplayType;
			app.project.timeDisplayType = 2013;
			var esMarker = layer.property("Marker"),
				esMarkerTime = timeToCurrentFormat(layer.outPoint, comp.frameRate) - markerTimeOffset;
			if (void 0 != esMarker.numKeys) {
				for (var a = 1; a <= esMarker.numKeys; a++)
					if (timeToCurrentFormat(esMarker.keyTime(a), comp.frameRate) == esMarkerTime) return app.project.timeDisplayType = timeType, !0;
				return app.project.timeDisplayType = timeType, !1;
			}
		}

		function validMarker(layer) {
			if (!checkMarker(layer)) {
				var comment = layer.property("Source Text").valueAtTime(layer.outPoint - markerTimeOffset / comp.frameRate, !1);
				comment = String(comment).replace(/\comment/gm, newlineMark);
				var params = {};
				params.bord =
					params.fsp =
					params.be =
					params.move = "";
				var esMarker = new MarkerValue(comment, "", "", "", "", params);
				layer.property("Marker").setValueAtTime(layer.outPoint - markerTimeOffset / comp.frameRate, esMarker)
			}
		}

		function canWriteFiles() {
			if (isSecurityPrefSet()) return true;

			alert(es_str.writePermiss);
			app.executeCommand(2359);

			return isSecurityPrefSet();

			function isSecurityPrefSet() {
				return app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY") === 1;
			}
		}

		function hexToRgb(string) {
			"string" == typeof string && (string = parseInt(string, 16));
			var r = string >> 16 & 255,
				g = string >> 8 & 255,
				b = string >> 0 & 255;
			return [r / 255, g / 255, b / 255, 1];
		}

		function fixBlueHex(num) {
			for (var hex = num.toString(16); hex.length < 6;) hex = 0 + hex;
			return hex;
		}

		function fixList(control) {
			var wh = control.size;
			control.size = [1 + wh[0], 1 + wh[1]];
			control.size = [wh[0], wh[1]];
		}

		function validNum(inPut, def, express) {
			return String.prototype.trim || (String.prototype.trim = function () {
				return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
			}), "" == inPut.trim() || isNaN(inPut) || express ? parseFloat(def) : parseFloat(inPut);
		}

		function refreshButton(pal) {
			if (comp = app.project.activeItem, osl = sl, sl = comp ? sortLayers(comp.selectedLayers) : [], checkTextLayer(sl))

				if (pal.grp.leftPart.buttonArea.olGroup.olCheck.value && checkOverlap(sl)) sl = osl, alert(es_str.overlap);
				else {
					pal.grp.RPparent.rightPart.editText.backupSelection = "",
						slIndex = [],
						pal.grp.leftPart.listArea.removeAll(),
						//pal.grp.leftPart.buttonArea.resel.enabled = 0 == sl.length ? !1 : !0,
						app.beginUndoGroup(es_str.title);
					for (var t = 0; t < sl.length; t++) {
						slIndex.push(sl[t].index), validMarker(sl[t]), pal.grp.leftPart.listArea.add("item", t + 1), pal.grp.leftPart.listArea.items[t].subItems[0].text = time2code(sl[t].inPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text) + " --> " + time2code(sl[t].outPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text);
						var r = sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, !0);
						pal.grp.leftPart.listArea.items[t].subItems[1].text = r.chapter + r.url + r.frameTarget + r.cuePointName + r.getParameters().bord + r.getParameters().fsp + r.getParameters().be + r.getParameters().move + r.comment.replace(reg, "\r"), sl[t].selected = !1;
					}
					app.endUndoGroup();
				}
			else sl = osl;



			// $.sleep(2100)
			pal.grp.leftPart.buttonArea.pickPos.enabled = !0;
			pal.grp.leftPart.buttonArea.rmMarker.enabled = !0;

			for (var i = 5; i < pal.grp.leftPart.buttonArea.children.length; i++) {
				pal.grp.leftPart.buttonArea.children[i].enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0
			};
			for (var x = 0; x < pal.grp.RPparent.rightPart.btGroup.children.length - 1; x++) {
				pal.grp.RPparent.rightPart.btGroup.children[x].enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
				pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.notify("onDraw");
				pal.grp.RPparent.rightPart.btGroup.fbt.fcValue.fillBrush = 0 == pal.grp.leftPart.listArea.items.length ? pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, disableGreen, 1) : pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);

			};
			pal.grp.RPparent.rightPart.editText.enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
			pal.grp.RPparent.rightPart.btGroup.rebtGroup.epButton.enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
			// var vemg = ScriptUI.newImage(vemg),
			// 	vemg1 = ScriptUI.newImage(vemg1);
			// pal.grp.RPparent.rightPart.btGroup.fix.direct.verticalImg.image = 0 == pal.grp.leftPart.listArea.items.length ? ScriptUI.newImage(vemg1) : ScriptUI.newImage(vemg);
		}


		if (canWriteFiles()) {

			var ui = es_buildUI(thisObj),
				comp, sl, osl, slIndex, markerTimeOffset = 1,
				newlineMark = "↵",
				reg = new RegExp(newlineMark, "gm");

			if (-1 != $.os.indexOf("Win")) {
				if (File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat")).exists) var bat = File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat"));
				else {
					var bat = new File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat")),
						batCommand = "powershell -Command \"$wshell = New-Object -ComObject wscript.shell;$wshell.SendKeys('^v')\"";
					writeFile(bat, batCommand)
				}
				if (File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs")).exists) var vbs = File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs"));
				else {
					var vbs = new File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs")),
						vbsCommand = 'CreateObject("Wscript.Shell").Run "' + bat.fsName + '", 0, True';
					writeFile(vbs, vbsCommand)
				}
				if (File(Folder.temp.toString() + encodeURI("/echoClip.vbs")).exists) var echoVbs = File(Folder.temp.toString() + encodeURI("/echoClip.vbs"));
				else {
					var echoVbs = new File(Folder.temp.toString() + encodeURI("/echoClip.vbs")),
						echoVbsCommand = 'CreateObject("Wscript.Shell").Run "' + File(Folder.temp.toString() + encodeURI("/echoClip.bat")).fsName + '", 0, True';
					writeFile(echoVbs, echoVbsCommand)
				}
			}

			refreshButton(ui);


			if (ui.grp.leftPart.listArea.items.length == 0) {
				ui.grp.leftPart.buttonArea.pickPos.enabled = !1;
				ui.grp.leftPart.buttonArea.rmMarker.enabled = !1;
			}

			if (ui !== null) {
				if (ui instanceof Window) {
					ui.center();
					ui.show();
				} else {
					ui.layout.layout(true);
				}
			}
		}
	})(this)