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
			vemg = File("/Users/meng/Documents/vemg.png"),
			vemg1 = File("/Users/meng/Documents/vemg1.png"),
			olmg = 'PNG\r\n\n\x00\x00\x00\rIHDR\x00\x00\x00\x00\x00\x00\b\x00\x00L74\x00\x00\x00	pHYs\x00\x00\x00\x00÷Nå\x00\x00\x00ïIDATHíVQ \f}]¼Ën°oÄÎ\x00AÄ·êB3lÔhBéë+R±"I\b1èð5|@LÎ\b6ñ±ÆîÅèoLv¸§PFNÏ¬\f²ëÍ«ùSp·ÐØ3ÆþÙBÙPElç^)¡üc&û¶U\rüÃà¹0\bdà´\rÂ]ô\n<m°Kü\x00¾xJÀ×éF#YgUUUk¤j§q#nÄÇ&îrJ>7]4´!ãïé\r8<}¬üø®îq~TÖæ2r°&à*©h¨\x00\x00\x00\x00IEND®B`';
		var bgGreen = [0, 1, 0];
		var disableGreen = [0, 0.46, 0.03];

		for (var i in es_str) "zh_CN" == app.isoLanguage ?
			es_str[i] = es_str[i].cn :
			es_str[i] = es_str[i].en;

		function es_buildUI(thisObj) {
			var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", es_str.title + es_str.version, undefined, {
				closeOnKey: 'OSCmnd+W',
				resizeable: true
			});


			// var dad = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02\u00DAIDATH\u0089\u00D5VMh\x13A\x14\u00FE&\r1\u00C9ARl\u00A9\u00D0*\x15\u00C1bJ\u00AB\u00A5'\u00A5\u009E<\t\u008A\u00C1\u0083\u0088\x17sPP\u00B4\u00E8\u00C9\u00AB9\u0096\u009E\x02\u00AD(\u00D8\u0083')\x12\u00A4\u00E0A\x10<)\u00EA\u00C1\u0092*\u0088\u00C4F(\u00A9\u00A5\u00E9\u00C1\u00A6xhb]\x1Dy\u0093\u00DDq6;\u00B3YY\u00A5\u00F8\u0085egg\u00DE\u00DF\u00CC|\u00EF\u00BD0\u00CE9TDh\u00CC\u00C0Rl\x00\u00CD\x15!q\u0080s<\u00BA\u00C0i\u00ECQ1\u00D8\x18\x00g\u00B5\u00EE\u008A\u0094p\f\u00F2\x12X{\x1B\u00AD\u0088JI'.\x1BdN:\x15x\u00DD\u00BD,\u00C7\x13\u00D9\u00E0.|\x05\"\u00C6\x15u\u0091}\x1C\u00B6\u00D8t\u008E\u00B3\u00CC\u00C2oS\u00C2,GV\x1C\u00E2\u00E9\"\x17\u00EF7c\u00DFi\u00BE\u00A9YN\u009F\x14\u00EF\u00B9\u0091\u00A6\u00C6\u00AB\u00E3Q\u00A9)\u008F\x7F\u00EA\u0096\u00D0\u0094s\u00CE\u00C06\u009FS\u00BF}\u00B7\u00D2\u00F6 \x02m\u00D5c\x15,\u00CB\x1A\u00C9*+\x0F\x16\u0088?Z!5F\x11Ei\u00C8\x12\u009B\u00D3=\u00AB}yU\u00D6\u00E5\u0099<\u00E1\u00E9\u0099\x0E\u00F1qp\x01(\u00B1\u00E6C\x18\u00CF\u00D1\x11^g`9\u00ED\u009EEx\u0099b\r\x1F\x0E\u00EB\u00F7\u00F26\u00B9\u00C5\u00E3\u009B;\u00B4\u00CAr\u00B2\u00BA'\u008F\u0095\u00FE\u00AB\u00A8\u00EC\u008Fb\u00A5\x1F\u00B88\u00E9R\u00F2U\x0E\u008A\x7FsU\u00DB\u00A3,\u008A\n\u0091\u0083H\x02\u0096\u00D5\u00C9\bxH\u00B2\u00DEU\u0091ycg\u0081 \x0EG\u00CA#\u00EB\u00FAX\u00ED\u00CB\x1B\u00D9U\x1A\u00B2Z\u0095\u00DDa\u00D3\u00DD\u00AA \u009698\u00F5\u00AE\u00C3\u00B3\x055\x17\u00A9V\u00CAP\u009D\u009F\u00BA\u0085z\u00A2j\x0E\u00DBQ\u00B4\u008B\u00AEPWC_L\x17\u008C\u00C9\u00CE\x1A\u00C9o8\u00B4\x19\u00D3\u009E,man\u00A4\u0093\u0083o\u0098O\u009B<:\u009E\u00D4H\u00D6\u00BB*\u00AD\u00B2\u00FA\u00C4\u00A0\bfn\u00C6\u00D0\u00BB\x04\u00EC\u00FDd\u00A1w\u00E96\u00DF\u00BD|\u00A3\u00ED=\u00FB\x15\u00B4@\u009E\u0083\"Tb\u0084\u00F2\x1C\x06\u00A1\u00A2\u00DE\x16\u00C7T\u0080\u00D5\"\u00FC\u00C7\u00FAA\u008FZ\u00D4\u00E2\u00D4\u0097+x?\x1A\x11\u00CD\u0093\u00A8\x07\u0091\u00C3\u00C0\u0091g\x16\x06\u00E7\x7Fbc\u00D7\x1D-\ru\u00F0\u00A3\u009E,Ij\u00A2\u00A8\t\u00A3&\u008D\u009A\u00C6\u009A\x04\nLk\u00D1\u00B2\x1A\u00895\u009C{\x193\u00B6-\x13(\u00EDg\u008Fn!^\u00EFq\u00A5\u00BE\x02\u00F3\x1D\x7F\u00DE7+\u00B2Y\u00E7\u0094\u00FE]9\u008DwBS\u00D0I\u0087t\u00CB\u00E9\x19\u0093y}\t!\u00D24\x12\u0097\u00F1\u00E4l\u008F\u00B8C\u00C2\u0094\u00CD\u00A3f\x11s+d\u008A\u0090\x01\u008E\u00DBr\u00C4\u0081\x13\x0F\u00D7\x10\u00AF\u00DF\u00E5\u00E0\x1E\x12\u00FA\x1Du\x16\u00F3c\u00F7p\u00FEyT+\u00E04\x02\u00D35<8fa\u00F4\u00C5%\x0E~?\u00F0\u008E\u00E5\"1\u00F9k\u00E75\u00EA0F!\x1D\x1E\x0F\u00FF\u00C0\u00CE\u00DA\u00B4/\u00C3\u00DB\u00B2\u009A#%\u0098M\u00CD\u00D5\u00E9V:V\u00D3\x1A\u00C9\u0090\u00AC\u00A6\t\u00FB6\u00E5@A\u00D0\u00BF\u00E5\u00C5t\u0081\u00DA\u00A4xhLs\x01\u009C\u00FD\u00B5.\x11\x06\u00FF_\u00AD\x0E\x05\x00\u00BF\x00\u009B\x0E\x0Fu\u0091\u009A\\\u0088\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var cimg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02&IDATH\r\u00E5V\u00CDjSA\x14\u00FE\u00BET\u0090\u00FEX\x12\u00DAM)HW\u00ED\u00CA\x1A\u00A4\x0F\u00D0G\u00C8\x03(v\u009D\u0095\u00E0\u00A6]5\u008F\u00A0\u00D8\u00B5\u00C6\x17\u00B0\u00E2Z\u00A8k\x17%\u00DB\u00B8)\u00E8B\x10I\u00DA\u0080\u00B6\u0081\u00E8\u00913\u0099\x1B\u00E7\u00F6\u00CE\u00DC;5\x17)\u00FA\u0085\u00C3\u00BD3\u00993\u00DF9g\u00CE\u009Ds(\"pQ\u00D1w\x1E\u00EE\b\u00BF\u00AC\u00BE1\u00EF\u00BA\u0082\x1B0\u00CB\u00A4\x0B\u00A6T\bJ`\x0F\u00ABb&\b\u00B6\u00DC\x15\x13\x15\u00D5\x17\b\u00A1\x13\u0089@Pw\u00C7\u00E3\u00B9\u00F1\x1F-\u00AC\u008B$\u00E2.\u00C8X\u0091lo\u00EC\u0086\u00D0\u00BB\u00C0k\u0094\x0F\u0095<\u00CD\u008A\u00E5\u00AA\u00AB\u00D3ltR\u00DB\u00A4\x02h\u00D0\u00A51\bE\u00DB\"\x1B\x04T!hz\u00FD%X\u00B5\u00BE\u009E\u00E6\u00BAR\x18\u0088<d\fVZ~\u00D8\x1Cq\u00AF-\u00FC\u00BA\u00D2\u008Cr\b\u0082\x06\u009A\u0087\u00E2\x1E\u00A6\u0091\u00AD\u00BE\u00E0\u00ACvr\u00D9q\x15\u0097\u00B9\u008E\u00B7\u008D\u00EC\u00EE\u0083*\u00B0\u00D8_\u00F3\x11\u00DFH\u008D\u00BA\fZ\u00A8\u00EE\u0098\b\u00DAg\u00CA\u00EC\"\u00D1\u00B3\u00D1\u00F8\u00EB9\u00E5\u00E6e,\u00CA=\u00AA\u00A9\u0095\t>\u008A\u00D2\u00CE$\u00EEY\u00ED\u00C4\u009C\u00AD\x19\u00E6\x072}\u00BF\fg/\u00B0y~s2q\u00BC\u00F8S\u00E6\x073\u0085f\u00F3\u00FB\u00ADQJQqoP\u00E1\u00FB\u00ED`D\x7F\u00FB\u00FC\u00FC\u00B1\u009F\u00E1\u00C1\u00BB\u00A0\u00CB\u00E5G;\x16\u00A9\u00CB4\u00A4\u0093\\8Af]\x10\x12\u0082\x1D+B\u00F0I\u00A2\x13\u009D\u009E\u00D6\u00B2\u009E@\u0096\u00AE\u00E43A\u00FD\x04_\x02\u00F8D\u00B0}ef\x1F\u00CA\u0089\u00F6\u00DF\u00C6TVO\u0083hbm\x19\u00F8\u00F9\u00F6\x0F^\u00CC\r\u00B5\x1AN\u00CD\u009CwM@\u00B0\u0086\u00DE\u00F2G\u00BCz8.\x1BI\t\u00B9\x7F$\u00F8\u00B60B\x7Fi/\u00F6\u00DE\u00F66\x1B\x1E\u00C2\x06\u00CEg\u0087\u00D8}\u0091\u00AD[\u0097kX\u00F7\u00CE\b\u00BD\u00E5#\u00B7\x10\u00C4\u0088\u00AF\u00A8\u00B7p\u00B0\u00BF\u008Fg\u00AD`\u0094\u00BCpz\u008C\x18\\\u00FF\u00E4\u00FAg\u0088\u00FF(#s\u00BE\u00826\x04\u009D$\u00D1 \u00D8\u0081\u00E04\u00D8B\u0097H\\\u00B5\u00C4\u00EE\u00AF]\u00D4\u00B9\u0095\x01m\u00FD\u00EE\u00DA}z\u00F6YO\u00DA_\x17e\x13w\x00<\u00B5ER\u00EBX\r\u00C0\u00EBI\u0097\u00E8\u00E0?+\x12\x00~\x01%\u00B6\u009B*~]T\u0085\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var dimg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02\u0085IDATH\u0089\u00C5V=h\x14A\x14\u00FE\u00E6\f\bz\u00E6N\u0090\x10\u00AC,\u00D4CDP\x10\x1B!\u00B9\u00C2>i\u00D3\u00F8\u00D3\u00C6\b\u00DA\u0099Bn\u00CE\u00C6V\u00F0\u00AE5\u00D7\u00A4N\u00B00\x10R\u00D8\u00D8DM\u00D2\u0088\x04,\x04Q\x11O8.\u00C4B\x12\u009F\u00BC\u00D9\u009D\u00DD\u00D9\u009D\u00D9\u00DD\u00BB\u00BD\u0085|\u00CB\u00E3v\u00867\u00F3\u00BE\u00F7\u00BB'\u0088\b&J\u00FC.Z\u0092X\u00D4>k(\u00AD\u008B\u00C4\u0080u\u00C4\u00DA\x00\b\x12\x1B3\u0084\x17\ru\u00A4D \u0089OW\u0081o\u00E7\u00C2#\u0082\x7F@\u00C2\u00DC\u00A8\x03\u00A8Go\"i\u00D1\u00E0{1\u00B3M\u00FA]\u00EDk\x05\u00B5`\u0085\u00DD+\x07\u008A\bA:y\u00C7\u0091\u00AA0\u00A6XBH\x179\u008F\u00BD\x0E\u00D8\u00F9\u008F\u00C0\u00E7\u00CB\u00A0\x05)\x02\u00E6\u008A\b\u00B3ey\u00BCD:\u0098Q\u00D6Z\u00E1\u00D7\u00E4<\u00AF\u00C7,\x16\u00BB\u00A2\t`\"!\u00EA!J\u00B9\u00FD\u00CCBp3\u00C7B\u00D4@\u0081,v(\u00B2\u00AE\u00C1\u00B6bzk\u00E5\u008B\x13\u00EA{\u00EE\u0092\u0088O\u00A6u\u00B5\u00C1\u00C5u\u00F3G[\u00CC\u00EE\u0084LtB2-\u00EB\u00B8\u009B\t2\u0098\u00D8y0\u00B15\u00FE\u008FN\u00F6\u008F\u0085;w}) \u00DA\u00C5\u00A4*\x0F\x02\u009F\u00E35\u00EFB\u00D0\u00A4\x1A\u00CE\u00E8\u00BA\"\u00AD\u00D4\u00A2\x19\t\u00A3}\u00E3\r\u00F0@\u0086\u00EF\x1F*@\u00E7Q\x06\x15W\u008E\u00C9o\u00BE\u00FD\u00F2AR\x1D\u00B8GH\u009Cv\u00BF\x12\u00A7/\u00B5~v\u00B4\u00AF\u00F7\u0080\u00F7\u00D5\x1C\u00B43\x026x\u009Ek\u00DE\u00D05\u00B7\u00D2k{\u00BC\x07\u00AC_\u00F8\u008A\u00D3\u00DD\u0097z\u008B\u00EB\u00C1\x1A\u00CA\x16m\u00EE\u00E5\u009Fg_\r\x1C\u00ED\u00C8\u00E1\u0094!\u00A0\u00E5\u00E8\x1Ac$\u00CB\u00A3`$\u00D6\u00A3\u00C0*\x115\x126\u00A7\x1B\u00D8\u00AC\u00E7\u00BFv\u00A1\t\u00FD\u00F1O\u0084\u00B3:\\cD\u00F7)?\u00FE\u00D75Q\x1C\x1D\u0094Y]\u00AE\x7F&\x06\u00EAh5\u00A6\u00B11\x0B,O\u00B1Sk(\u00F7\u00DF\u00B9\x14\u00ADAi)$6\u008B\u00FA#c?f4\u00B8\u00E9\u00F6\u00CB\u0084?'\\\u009A\u00E6#\u00E3\u00F7\u00A7\x17W\u00AB\u00A1fG \u00BC6\u00C1\x1F\u00DFk{\u00C0\u00DC[`\u00AF\x02,.E\u00F5]g\n\u00F18.\u00F3+\u009E\u008E\x1D\u0081\u00C1=\u00E6\x1Cq\x12M\x01\u00D0L\u008D\x10\u00E7\u009E\u00BD|\u00DA\u00F6\u00D6\u00DD\u00C9\u00FB\u00FEy+\u00DF\u00E9\x13wP\u00DCy\u00EEM\u00E7x\u009An\u00AD\u00B6\u00C5\x19\u00C1,\u00EE\x11\u00A8S\u008Ca6\u00B4<u\u0088\u00EA\u00EF\u00D7\u0098\u00F8~\u009B@=[)\u00B9\u00B0\u00877|i\x07\u00D8>u\u0088\u00BF\u00C7\u009FP\u00B5\u00FBl\u00E8\u00F3>\u0086\u009A\u00D5\x02\u00E2!\u0080/\x04Z\u00CDk0\u0097\u00E1\"q4\x1F\t\x00\u00FF\x01\u00C2\u00E09\u008A\u00BD\u0086iS\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var eimg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02uIDATH\u0089\u00E5W\u00BDn\x13A\x10\u00FE6\x05$Q\x14\u0082\u00E8\u00A0I\u0095.\u00C2\x05=\u008F\u0090\u00BC\x01\u00A9\u00FD\x04\u00F0\x16\u00E1\t0\u008DK\u0082R\u00F3\x02T\u00B8MM\x03\x14\u00C1RHr\x06\u00CB\x13}{;\u00EB9\u00DF\u00EE\u009D\u009D\u00B3\u00A0`\u00ADS\u00F6g\u00FEv\u00E6\u009B\u0099\u008D\x13\x11\u00D8\u00B1\u00C1\u00B9\u00FB\u00F5h\u00E6\u008A\u00ED\u0089\u00DF\u00F7\x14\u0082\x1E\u00AEvg\u009CWX\x1C\u009Cdd\u00BC\x19\u0088;\x1E\u00C9\\\u00C6\u00D1\x17\u00C1\u00ED\u00D6\u00A4\"\u0083\u00FC\x02q\u009EB?j\u00B3\u00EBr/\x1C\u00E0@8\u00CA\u00F5\u008B\u009Fu\u0091vP\u00BC\u00D7\x0FqI\u0082\nq\x13\u00C1FB\u00F4i\\D\u0083\x0E8)\u008D\u00C4\u00ED\u00D6pn\u00F9\u0087W\u0082\u008B\u00C3\u00A9\u009F\x7F\x7Fz\u00AE\u00B7\u0098s\u0092\u00C0\x1CT\x0E\u008Dc\u00F6 \u00E8'\u00EF\u00EB\u00E0\u00F6\u00C2]\u00C7\u008DWiuD\u00D3\u00A8\u00F9\x01\u008A\u0097\u00B3\x13qp=\u00F7\u00E7\u00E1\r\u00E3\u00EE~<;\u00AF\x11V.s\u00BD3\u00F5~z\u00FDNl\u00C4\x19P\u00BF_\u00E2e\u0098\u00F4\u0086w2]FB\u00EBW\"\u00A2t\u00FE\u00A4\x06\u009F\u0084;{d\u008A\u00EBb\u00B3\u00A0\u008B\u00D5\u00D5\u008D\u00CC\x19\u0081}\u00FA\u00DF2w\u00F2\u00F6\u00FAC\u00D5\u0089\u00D9b\u009E\u00B1\u00CEr\u00D7\x1C\u00C3\u00D00\u009E\u00BF\x1F\u00DC\u00C4\u00D0\u0085z\u0092\u00CCt\x03\u0086\u00A1g\f1\u00F5\u00CC\x04\f\u00D7\t\x01Y\u00C6J\u00CCU\u00C0\u00F5\u00CE4\u00C7\\B\u0090h2\x00\u00F1g\x17\u0087%ly\x05\x0B\u00DB\x05\u00B3k\x02r\u008C\u00E9LW\x01W\u00BB\u00B3\u00E8\u00BC\x04c\x1E\u00DB\u00C5fQ\u00F1~\u0082qilC0\n\x1F\x7F\u00A7+c;\u00D4\u00E1K\u0081<iDX\u0082q\f\u00E0=\u0080\u00AF\x0En\x10\u00F7\u00FFYbt\u00D2\u00DCet\u00B2\u00FA\u00AF(f\u00C9\u00F7\x0F\x02\u00B6\x00S\x1Eb[\u00E0Y\u00AA-\u00E4F+.\tlf\u0088&:\u00BF\u00CF/\u0099\u00F0\u00DF\u00FC\u00C7\u00B9\u00EE\u0093&dS;\u00DEs\x07\u00AC*\u00EC[V!\u00ABI(M\u0095*\u00C3=\u00AD4j\x00yMOkU\u00CCl\u00F39g\x15\u00F6\u00CF$db2\u00A5\u00A3\x01\u00A4 \u00AD5`!\u0083\u009Bk\u0088\u00DEB\x1B\u00ADV4V\u00B2\u0084\x1B}8x\u00A6MX\u00AB\u00DD\u0082w\u0096\u00AE?m\x06\u00DCG\u00E1\u00AA\u0085\u00AF4\u00E0\u00D3Q\r<\x11|<[B\u00E1J\u008A\u008D\x01\u00FBMg\x10\fBe\u00D6g\u00CB\t\x04\u00E3\u00A5\u00FB\u00C4}\u00BF\u00F0\x14\u00D5\u0096\u00A0\u00BFAJ\u00DE\u00BA+\u00D71\u0080\u00E7a~\x19\u00FE\u00F6\u00F4\u00F9k\u00C7\u00BA\x15\u008F\x00\u00BC\u00E5\u00FF\x12\u00A1\u008F=\x06\u00F0\u0091\u00EF\u00EDE\u00C2\u00FF\u00ACI\x00\u00B8\x03I\x10\x06\u00F7\u00D5r\u00F5\u00B8\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var fimg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02\u00DDIDATH\u0089\u00E5W;o\x13A\x10\u00FE\u00D6\x12\r\x0F\u00E1\x00E\bF1\x12!\x15\u00C4\x12\u00A1@\u00A2p\u00F8\x03\u00F1\x0F\u0088\x14\u00D7i\u00A0L\u00C75\u00D4\x18A\x1F\u00A7\u00A0%(5\u0092[\u0084\"\u00E3\"\u00E2%\u0084-\u0081qB\u0082\u00EDD\u00C8\u0091p\u00D0\u00A0\x19\u00EF\u00AE\u00EF\u00CEw\u0097\u00C7\x19Qp\u00AB\u00F5\u00CD\u00CD\u00CEkgfg\u00D6\u008A\u0088\u00E0~\x12\f\u00ABI\u0090\u0082\u0092\x15A`\u00BE\x00\u00DCj\t\u00E8aa\u00AA\x10\x19PYU\u00BF\u00F2\u00A9/\x03(\u00E1\u00C4\u00AF\u00B7\x1E\x19\u00CCO \u00E5\x17\u00EA\u00F0\u009B@\u008EE\n\x01\u00C1\u00C1t\u008B\x04n\u00A4\n\u0098+\t\u00CCs\u00C0\n#^KR\u0081\x04\x1E\u00E2(\u0082\u0084\u00A5\u0082rdoP\x19\u00BFqY<|D \u00A4q\u008D\u00ACa\u00BD\u009F\u00B9\x12/\u00D0\x00\u00AC9\u0093\u00CC!\u00DB\u00F3s\u00BA\u00A7\x10\x12\x16\x02\u00F7\u00AB\u00A0\u0092z\u00AF\u00ED\u00C8\u00AD\x1C\u00E8\u0088\u00A8'\u00E1_S\u00AF\u00B3d\u00F2E|\u00C3\u00F0\u00DD\x1A\u00A9\u00ED\u008B\x0B\x03r\u00FA;\u0083\u0083\u00CE\u00A9\u00AE\u00ECz\u00EDN\u00D7\u00E2k\x13e\u00C1\u0095o\u00EF\x19\x17\x05zC\u009C\u00CD\u0084O\x1E\u00B8\u00DC\x05\x12\\\u00EDjm\u00D0s~\x04\u00A7\x0F\u00D9\u00E1\b\u00D4H\u00BDg\x17\x1BW\u00872\u0087M\u008E\u008D\x16i\u0099cy{\u00B8\u00A1\u008A\u00C5\u00AC\u00A0r\u00E6`\u00EA3p?\u0094\u00DB\u00E3\u00E9\u009Fg\u00B6%,:\u00B39d:\u00DB)\u00C8\u0091\u00DE\u008F\u00AD\u00D1\u00BD^L'\u00CA\u009E\u00B8/.E3K\x10\x16\u0097\u008C\u00A6\u00BC\u00C5\u00F3\t\r\u00D1\u00DE\x07\u009E\u00CF\x13f\u00AA\u0092]|\u009C-\u00FE\u00C3\u00F5}av\u00D5\u009D`\u00B39\x7F\u0099p\u00FDf\u00D1\u00E2B\x18\u0083r\u00BBg\u00E2L\u0095\u00AC5\u00FC]\x1F?\u0098Y\x10;#\u00ED~\u0081\u00B1#{(\u00E6`\"T\u00F4\u00E4Q8rn\u00EB:\u00DC$\u00D0\u00F9\u00D0\f\x0Bal\x03X\x06\u00F0EA\x15-\u00FE\u009F\x1D\u008CX\u009A\u00E3<\u00B1\u00AC\u00FEk\u008A\u00B9\r\u00AA\u00DDsm\u00F5\u00F1\u00C6\u00BEz\u00EA\u0090L\u00DDu\u00A5Lp{`\u00DCJ\u009E\u00D4\u00DE\u00E9\u00AE\u00FA~i\u00F5\u00D0\u009A#\u00F21-\u0099\u00B8\u00B0B\u00A6\u00B4`\u00F9\u009E\u00AB\u00AB\u00C2\u00E1\u00D3\u00E2Y\x7F9Kh^\u00A8\x1C.\u00DF\u00C3\x15\u00E7\u00B8_Y\u00A1\\ \\g\u00DCs\u0084\u00B9\u00800\u00CD\u00EC\x1B\u00C2\u00E6\u00D8\u00C6\u00B1\x14\u00CBNL\u00C14\u00C2\u00DEM\u0091\x14UW\u0097q\u00D1gE9{\u00C3\u00F0D\x14\u00DB(\u00C5yv\x17vF\u00AA\u00B6\x00\u00F1d\u00B8\u0091*\f\u00D0o\u008EmXwO\u00B7H\u00BA;\u00F3wN\u00BE:\u00AE\u00AB{;aa,\u0094\u0085\u00D7\u00C7\x7F`\u00F7\u00EC\u009A5pkt\x1D\u009F';\u009Ep\u00C4\u008D\u00B1,~M?\u00C3\u00B7\u00CB\u00BF\u00E5\u00AA\u00E6s\u00A1'$l\\\u00EF\u00CE\u00C7#\x13[\u00F1Q'\bE]\u0099\u00CD\u00B5%\x0FB;\u00C8\u0098a+N\u00BAZ\u0082\x19\x03'\u0081\u00E7\u00B0+W\x0E\u00C0\u0094\u0086\u009B\u00FA\u009D1\u00D7_\u00F73l\u00C5\x15\x00\u008F\u00F9\u00BF\u0084\u00EEc#\x00^\u00F0}\u00DBO\u00F8\u009F5\t\x00\x7F\x00j\u009F\x02\u0084}\u009D\x1D\u00FF\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var gimg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02\u008CIDATH\u0089\u00C5WMh\x13A\x14\u00FEF[\u00EC6E\x02\u00A5XZ\u0084\x14D\u00B1\x07\tVO*D\u00C1\u009B\u00D8\x1EzS0G\u00E9E\u008Fz\u00EAI\u00AF\n\u00BDx3G\x0F\u00D2\u0082P(\x15i\x0F\"\x1E\x14\x11\u008A\u0082\x05\u0095\u00FACB\u00C1\u008D\u00C4\u00B4\x1B\u00B3\u00F8\u00E4\u00CD\u00FE\u00B0\u009B\u00DD\u00D9\u009Flh_\x18vf\u00F6\u00BD7\u00EF}\u00EFg6\u0082\u0088\u00E0\u00A5\x03<\x17\x10\x05\u00F1\u00E9\u0094)\u00F7\u0099Cr\u009D\u00D1I>\u00DD\r\u00C2:?\x15:\u00CE\u00D6I\u00BC\u00BD\u00D0\u0096\u00F3P\x0E\x1F9Jm\u00C5\x05\x10n\u00FB\u00F7<\x0B\u00B9\u00D1\x1C2Q\x1Do\u00872\u00D8\x1AJ\u00DE\u00BD\u0080\x11\u009D\x14\u00C9\u00E0\u00B3X|>\u00F9(\u00D4z\u00C6\b\u00FC;N\u00A4\u00B6\\\u00F5\x12\x17\u00BF\u0090\u00D7\u00EAN\u0097\u00D4\u00EE\b\b\u0093@}\u00EE:\u00CA\u0095X \u00A2(\x189\u00D6\u00A8\u008Fl\u00C9x\u009F\u00805\u00EE?$\u00F1\u00B3p-\u00C0\x18\u0080bc\u00AA\u0082\u00EBk\x123\u00DB\u00C9\x19\u0086\x07\x0B\u00F3.DJ\x1C;\u00D0\u0091\u00A0\u00E3\u00CEc\u009E\x15\x13\x0B\u0083P\u0096\u0082o\u00CE\u00B7\u00D5<j\u00E1<\b&\b[*\u009ELh\u00F7>T\u0099\u0085\x05D\u0099\u00F3_@\x14\u0095\u00D2\u00A1@-\u00DE\u00B0B\u00E4\u008C\u00E6\u0090\u0099\bm\u00EC\u00E4\u00DAN\u0088d\u009C\u00B9\u00C8xM(\u00C7\x0B\u00F3\u00A9V\u0086\u00E5\u00AD\u008C;\u00ADK\u00E1\u00CD\u00C9\u00A7\u00E92l{t\x0E\u00D3\u00EF\u009C\u0093g\u00D2$I\u00C1\x15\u00DC\u00D5Zi3,\x12,\x1E\u00EA8\u00BF\u0098\u00B6\u009E\u0083\x7Ff\u0095\u00E1Te\u0098\u0080(\u00C9P\u0082\u00D6\u00BB\x11n\x008H\u00A0A\u0095pTz\u00EA,\x1C\u00F1~\x1F\x0B#\u00D3\u00C9Y(\u0093\u00D5Y\u00A8/\u00A9\u00AC\u0080\u00C8\u00E3\u00FB\u00C4\x13\f\u00D7.\u00E1\u00D5\u00E5~|\u00B4;\u00C4\u00F8W\u00E0\u00DC\u00F3\u00BF\u00C85\x1A\u00C85f\u00A3R\u00CAGQ\u00F5\u00E8VHm\u00ECe\u00A0\u00B5p\u0087\u00E0\u00CB\u00D4\u00BB7\u00B7D0\x06\f\u00A7\x11D\u00DF&q\f\u00FA\u00F0]\u00DF\u00A1<\u00AF\u008D=so\x14.[\u00EF\u00FB\u0085y\u00E2\u00BB.No<\u00D4f\u00FFo\u0094\u0096\u00DF\u00E3\u00F5\u0088\u00B5\x1E\u00D81Hk^\u0085U\u00A9\x15Q=Z\u00C4\u00E1\u00FA-\u009F\u008C\u00D64z\x02\u00B5\u00B2-\u00F2\u00A7\u0098\u00D3\u00E1x\u00DC{@\u00D8>\u00F2#\u0091|W\u0087~\u009BX\u0091\u0090zc\u00BB\u00AB\u00B5\u00C2n\u00FE\u009E\x1D\u00CC\x1F`\u00D8\u009Cl\u00F9\u00BD\x1C\u00DDH\u00AB'q9y\u00A8\u0084\u00FC\u00AF\x7FX\u009C\u00AA\u00CB\u00ADc\x1F4\x1C2\u00AE\u00A4\u00D6\u00D2\x15\u00D4\u00EC5a\x15\u0084\u00E54\u00F0zG\u00EA\u0096i\u00DF=k>\u00E3A\"\u00AD\u00C3]\u00F5j\u00FE\u00F3\x03\u00E0&\u0080*\u0080\n\u0081\u00EA{rp/h\x7F.\t\x00\u00FF\x01\u0088;\u0090\u00BC\u008F\x19Y\f\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var himg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x03\u00B4IDATH\u0089\u00E5VMlLQ\x14\u00FE\u00AE\u0091v\u00AA\u00B4\u00A3%\x1D\u00AD\u009F\u0089\u0085j\x11M\u00FC&\u00D2\u00A8\u00C4\u0092\u00B4\x11\x1B\u0089\u009F\u0089DD\x13\u00D1Xac,\u0088\u0085D\u0085\u00C4\u00CE\u00CF\u00C2BT5\x04\x0BD\x13\u00DD\x10\u00A2b\u0081\"\u0084\u00A25\u00FD\u00AF\u008E\u00D7v&G\u00CE}\u00EF\u00BE\u00BE\u00F7\u00EE\u009B1R\u0089\u0085;\u00B9\u00F3\u00DE;\u00E7\u009E\u00BF\u00EF\u00DCs\u00EE\x15D\x04\u00E7\u0098\u00C2\u00EF\u00A2\u00AE\u009DD9L\u008E\\\u00B1\u0088H>\u00E3a\u0092\x04\u00F9\u00F1x=\u0081P\u0095FG9&t\u0080P'Wu,1\u00F5\u00C8\u00BFD\u00FE8\b\x11\u009B`+&\u00D4\u0080\x10u\u00D3\x14c\x11S`\u00AA\u00A9}N\u00AC\u00C5\u00A5A.`F\u00F3.\u0092\u00EF\u00C3\x05\u00E7\u0099\u00AE\u00B9\u00E9\x1D\x19\x17Lq~\u0088\u00AEy\u008D.\u00AE\u0094<{\u00D4\u00B4\u00A7\u00E6\u00CF\u00BC\u00D1\t\u00CF\u0099pm\u00B7\x15<\"6\u00A06\u00B33r\u00C5b\u0086`\x04\x1D\u00CC\u00A1\u00C2>\u00B9\u00E0~\u00AD\u00AD\u00DA\x1D\u00EF\u00B7\u00B9\u008D\u00D2\u00B6\x114\x14-c(\u00BF\x05\"\u00D3\u00B0q\x10\x10\x11\u00F9\u00EC\u0099S/nDI\u00E5[\u00CE\x1D\u00AD$\u0086\u008A\x064=\u00AE\u008C*\u009CV\u00F6\x13\x06g\x0E\u00C8\u00E4\u00C6K.\u00D8y\u00E3\u00F9mn\u00A3k\x07X\x10\u00C5\u0090\u00C8'\x1C\u00BAHjc\u00B9\x14+\u00A4\u00CE\x1E%MX~l\x7Fh.\u00B8|\u0080\u00EC\r\x18\x0F\u00D7K\u0085\u00CArwi\u00CAWX\x12F\u00A6']\u00A9V\u0093\x15\u00BFY\u0096\u00E4P\u00B2J\u00C5\u00EF\u00C6\u00DFI\u00D5_\x15\x16\x10\rb8tR@T\u00A5\u0095v\u00A4J\u00E6\u008Fk\x01\x1B>\u00B8\u00C1\u00B2\u00DA\u0087\x06\u00AEC\u00980T\u00A8\u00A3\u00AC\u00A6\u0099\u00FF\u00AA\u00F4\u00C2NK\u00FD\u00C5\u0087y\u00B3HO\x14\u00FD\u00CB\x02r\n\u00EB1\u00AFh\x03\x02\u00A9$B\u00BD\u00E5\x04j\u00A1`\"\x17/\u00A6\u008DI\u00DE\u0086\u008Fpa\u00E0\u00B2\u00CC[\u00F0\u00D5r\u00D2cC\u00D4\u00B6N\u0088\u00E9n\u00B3\u00AB\u009E\u00BDk\u00F3zg\u00DF\u00C7\u00BBJ\x16\u00E4_\u0083.\u00CCU\u00A4\u00B4\u00F7\u00CD\u00FA\u00E4\u008B\u00C5\u00F1\u00D3ib.\u00E8\u008F`\u0097\u00D5\u00D6\u00D6\u00C6\u00E7\u0089s1\x12\u00CF\u00AA\u00C7\u00B1\u00E3\u00E1\x04\x1E\x05\u009E\u0092v\u00B9\u00C7\x15T\x7F\u00C3?U\\0\x1E<\u00F4\u00AA\u00E2\u00D6\u00C7!0x\u00DC\u00D0\u00BA\u00CA\u00C61P\u00D4d\u00F1\x1A\u009Ck\u00FF]aL\u00CA\u00F2d\u00C6\u00A4\u00BC\u009E\u00CC\u0098\u009A\u008D\u00AC<\x0E\x06\u008BN!\u0098\u00D8\u0084\u00CF\x0B\x05^\u00AE\u00CA\u00C1\u0097\u0088\u00C9\\\u00DD\n,{\u009A\u00C4x\u00CE\b\x12\u00F9\u0097\x10\u00EE\u008C\x11H?\x1E\u00BC:\u00FD\u00A0\x16\x10\u0084\u009E\u0092\u00AF\b\u00A4:\u0090kTc\u00EF\u00AD\x00\u009E\u00D4d\x17\x1F\u00EF\u00EF\u0083G\u00C6\x10\u00FC\u00B9\u0086@\u00ED\x7Fn\u00B8<M\u00EE7\u00B6\u0098s\u00FE\u00FB$R\u0081\u00A9\u00D2\u00A1\u00E6(l\x04\u00D4\u00D8r\t\u0088\u00ED\x1BE\u00AE\x11\u00F6E\u00C0[\x13\u00D2\u0091T@/(\u00BE\u00E0\u00FC\u0098\u0091Bwi\x1B\u00D7\u008DVG}\u00B3>\u00C9\u00E3\u00CD\u00DB/\u0087\n\u00FB|m\u00F8\x14c\u0083\u00EC\x1B\u00DB\x1E\x11\u00EEn%\u00C4K\u00CC\u00B6\u00D3_\u00DC-\u00BB\u0098\u00C7\u00A8K\u00B63rE\u00BB\r\u0099\u00DD^?\u00AC}\f\u00C7\\W\u0080\f\u00C2>\u00B2uv\x07\u00E5\u00C9\u00CE?\u00D8\u00ECj\u00B5\u00E9\u009B=\u00D0\u0082u\u00F7\u00C6\\\u0094\x13\u008D\u0080\u0091wU@\u0084<{!$\x06\u008B\u009B\u00C4\u00F7\u00B2.\u00B9/\u00DEW\\\u00C7\u00EB*3\u00BF\x15\u00ED@ \t\u00ACz\u00C4K[\u00B3\u00CB1_\u00E2\u009C\u009E\u00AB\u00C99\u00E4#\u00EBme\u0093\x05{\x14\u00A3\u00B9\u00B7e*\u00FC\u00D63\u00EC\x1DK\u00DF\u00FA\u00D9H\u00DB\u00B9\u00E41f\u00E4=\u00C6\u009E;9Y\u0097\u0092\x1Ae\x1F\u0081\u00E1\x10\u00B0?\x06\u00EC<s\u008C@\u00B1\u00AC\"\u00D6\u00F2f\x04\r\x19\u0091\u00BA\u009C\u00F9Mu\u00ADgD\u00F8\u00B8\u00E9.\u00BDi\u009D\u00865\x7F\x14q\u00BAa]jk0\\\u00B8\x18#3\u0082\bwr\u00FE\x06\b\u00A4\u00E71\u0093\u009E\u00FF\u00EB\u0090\x00\u00F0\x0B\u00CF\u00E5t\u009B\u00E1G{Q\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var iimg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x01\u00BFIDATH\u0089\u00E5W=N\u00C30\x14\u00FE\\\u00C1\u0088\u00C4\u00CER\x16\n{\x05\x12S\x10c\u00B9\x02\x12\x07\u00A0g\u00A8{\u0086\u00F6\x00H\u009C\u0080\x1D)Y\u00DB\u0089\u0081\x01&VV\u00C4VD\x1F\u00B2\u00DB\u0084\u00F8\u00D9N\u00E2:R\u0091\u00F8\"'\u00A9\u00E3\u00F7\u00EB\u00F7>\u00AB\u0082\u0088PFG\u00BD\u008B\u00A9$\u00D1\u0083\u00FE\u00D21>\x1B\x13C\u00A9\x1F\x1E\x1D=\u00F8u\x00\u0084\x04\u0093\x11\u00E1\u00FD\u00E0[\u0089\x17:\x04D\x02@\u008D\x1C\x19\u0081\u00B2\u00DF\x05SI\u0098\u00AD\u00BF\u00CF\x13\u00D0+\u0084z\u00DD1\u00D4\u00CF\x13pXn\x06-(\u00D4\x0B\bY\u009A\u00EF\x12\u00E8\x06JRK\x1F\x11\x15\u0083 \u00D5\u009C\u00E9\u00D8i\u00E6V\u00EB\u00F2\u00DA\u00916&)\u00B2\u00AB\x05\u0086\u00FD\u00D5\u00CC\u00F9\u00A3\u00BAg\u00B5\u00A1\u00D4&\u00A2\n\u0096O\u00CA\u0085|\u00AF\u00AD\u00F1\u00B9O\x02\u00A2\u00B0f\x07\u00F4\u00DC\u00DF\u00F5\x1A\u00DB\u00FB\x18\x13H\x18\x01;1\u0094\u00E6\u00EC\u0084\u00FD\u00AE\x14f\x1B\u00E2\u0082_\u00F8\u00BA^8*\u00DB\u00EDnU\b\u00AC\u0098Y\u00DDs\u00AC\u00FA G\u00DE\x0F\u00DA}\u00824\u00FA\u00A2<\x14\x05\u00AC.\u0099\u00AF\u00F7g\u00DB\u0081r\u0081\u00B4\x1F\u00B3\x06/\x10\x07\u00B5\u00F8\u0085\u00CFb\u0084\x1Du\u00DC\\\u00F8\u009EY\u00F2\u0094\u00AA[\u00B8A]#6\u00DBe\u00CA'LG\u00EEU\u00B7c\u00FD\u00E0\u00FB\u00BC\u00BD\u00C6\u0088\u00B2\x1C\u0083(\u00AFcP\u00D9\u0090\u00EB\u00F3:E6\u00F8\u00AAds\u008E\u0093'\u00E0\u00F2\x01x;^\u00E2\u00F0E\x05w\u00A1\u00CEycU\u0099F\u00F8\u00D0\u00B4\u00A2\u00E8\u00C3G-\u00D5\u0094#\u00ABt\u00FF\u00CDT[\u00E0-\u00CE\u00D1\u00B0\u008B\u00C3\r\x07(n\u00D70?\u00E99\x1A2f\u00B8\u00E1YM\u00AA\x03\x10f\u00D8s`l\u0082\u00ADU\u00B5\u00BBwi\u00C3+\x1D,u\x1F\u00A7\u0083E]\x1F;\u00B9\u00DA\u00F1\x0F\u00A3)\u00BA\u00EBuw\x16Sq\x1B\u00FF\u00EB\u0090\x00\u00F0\x03,<R\u00D3\u00AB\x02B\u00F0\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var wwmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x023IDATH\r\u00E5V\u00BDK\x1CA\x14\u00FF\u00CD\u0091B\u00B19\u0082\u0085\u00A0\u00E2]\u008Ali\nI\u0095p\u008B\u00FF\u0080\u0082\u00AD\u0092\u00AB\u0085p\u00E4/\u00B8\u00FC\x07\x11\u00C4>b\u009F\u00B4b\u0091\x18\u00B0Q\x14\u00ED\u00C4F\x17\u00A3&DH$Er\u00C7!O\u00DE\u00CC\u00ED\u00DE\u00CC\u00CE\u00CD~d\u00A3A\u00F2\u0083w\u00BB7\u00EFk\u00DE\u00C7\u00BE\x19AD\u00D0Q\n\u00DF\u00C5\u00FB\u00BA\u00E2H\t\x02\u00E111\u0094\x04\u0081\x04^\u00BEV\u0092}m\u0088\u00B3G\u00EB\u00D1\u008A\u0094Xm\x10\x0E'I\u00D9\u00E3\u009F\u00F3\t\u00F9\u0087\u00C9\u00B2\x11GI\u00FF/<\u0090$\u0088\u00B2\u00E14\u00C2\u009A\u008F\u00EE6\u00AF\"\u00A54\x17\u0089\x02\u00A6\x7F\u0088Y\u0083\x1B\u0086!-t\u00F3\x14R/\u00A3\u00ED\u00C1\u0096|.l\u0092\u00A5\u0089\u00ED\u009A\u00CC\u00B0|\x12\u00FC(K\u00BA\u00D9\u0090a\u0098\u0095\u00E8\u0096\"S(\u00A9\u0089HB)\u0089)\u00F6\u009Ew\u00C4\u00D7\u00F1%\u00A7\u0080\x1E\u0090\x11\u00DCrSE\u00CF\u00F4}\u00F8\u00B4\u009F\u008C\u00B5m\x01Q\u00C1\u00F4\u00C9\t\u00CE+\u00A6\u0097#\u00A1\u00FA3\u0093\u00E70\u00EF\u00B1\u00F4\u00F6\u00AD\u00E0\u009F\u00A0P\u00B6o\u00AFT\u0085\u0094\u00AD\u00FE\u008F\u00C3\u0099\u00ED/cK\u00D8}\u00D6q\u00F1\u00AD\u00AE7\x18\u00EF^\u00A82}\u00AE\u00AE\u00E7R\u00E6\u008E\u008Aj\u00BC\u00DC\u00A4\u00CC\u00CA \u00941\u00FF\u00B1\u00D7 L\u00AD\u0081V\u00D6\u00F6$x\u00B1\u00F2\u008D\x06\u00C0\u0087j\u0095@\u0081\u00B1\x1E\u00F3\u00EA\u00F3\u00A04Z\u0093\u0087\u00A7\x1A\r\u00D6\u00F6\x1D\u00B1\u00C0\u008F\u0094\u00B7k\u00CE\u0098o\u00AFI\u00D2\u00F0\u00C0\u00C9\x0F\u0087\u00D9X\u00E0\x14\u00F9w\x1FF!\u00CFEPh\u00D7w\u00EE\u0098\u008Ff\u00F1\u00F3\u00E1\u0095$\u00ED\u0098\u00CE\u0085\u00A41\u00E1h\u00FA\n~\x0F\u00B61\u00B3O\u0092\u00F8\u009DP\u00C9o'\u009FS\x1F\u00BF\u0086:\u0098\u00FA\u00D1\u00FB\\\u00F9\u009D\u00D7\x1C'Ja\u00C7\u00B8\x1CY\u00C4\u00C5\u00F8\u00B51\u0099tb\u00DE\u00E5\u00C8bV{\u0099j,\u008F\u00F6co\x05\u00FE\u00A9[\u009Ey\u00C7\u00DEJ\u00E25@C\u00AAc\u00F1mt\x0B\x1Bs\r,l\u00A6[c\u0099\u008D\u00B9\u0086\u00D4I\u00B3\u009B\u00F4\x1D\u00CB\u00AB\x05\u00A0\u00DF+\u009E`\u00A7\u00F6\u00C6\u00DA\x04\u00DF3\u009F~z\x05\u00E0@[\r\u00AC\u00F9\u00AE\u00C1=\u00F7\u00D4\u0085\u0095\x15#e\x01\u0091$~@\u00A0\fiQ\u00B8_\x03\u00E4o \u00D7\u00AC\u00EE\u00D6\u00BC\u00EE`\u00BFM\u00AA\u00A9e\u00EB\u00FF:$\x00\u00DC\x00]0\n\u00BC\u00F5\u00DD\u009A\u0091\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var qqmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02+IDATH\u0089\u00EDV;K\x03A\x10\u00FEV\x05\u0089\u00A8D\b\u0098\"\u0082Z\u0098JH!j\u0099Blcg#h)\u0082\u00BDv6\u00DA\u00EA?\u00B0\u00B2\u00D5\u0094)\x04\u00D3)6\x16\x16\u009AJ\u0089\x11\u0085\u0080\n\u00E2#\x10\x19\u0099\u00CD\u00EDy\u008F\u00CD\u00ED%'\n\u00E2\x1Es\u0097\u00CC\u00CD{v\u00BE=ADp\u00AE\x0E\u00FE-\u00D2 \x01\x11\u0097|)A\u0088c\u008Cx\u00C1\u00A7\u00D2\u00C4\x06\u0084\u00CD\u0095\f\u00A4\t\u00E2\u00BD\u00A7\u00A6U\u00F11\u00BC\u00AB\u00CB\u0096d\u00BB\u00E9\u00860\u0095 l9\u00B6\u00E0$\u00BC\u00C5j\u00C8\u009D\u0091\u00E2\x19]\x04\nt\x04i\u00AA\u00843bk\u0087\u00C4\u00ED\u00C8\u009E\u00EB\u00AD\n\u0080\x0B(\u00E9!QV\u00BC/\u00B3\u00FDO\u008D\u00E7tu\u00C8\u00AF\u00F9\u00DAsb[\u00A8&W\u008C\u00E9\x04Fk,\u00841U\u00DB\u00D2Sb\u009D\u00D3\x0E\u00AD\u00ED\u00EB\u00D1\u00E66\u00D9ea\u009Ax$\u00EC/\u0092J\u00D8%\u00EBcT\u0086\u00F7\\\u00CALo\u00B1\u009AWN\u00AB,\u0099\u00EC\u00E9!Q\u0096;%\u00C0\u0088VY\u00BB\u00DD\u00AC\u00DE8)R\u00B5\u00BF\u00AFU\u00BF\u00A7\u00CC\u009B\u00A4%mWU_z\u00EB<\u00C48\u00CC\x11\u00AA\u0083\u00B7 \u00CC\x05v\u00C1\u00F5\u00E7f\u00A4\u00E0\u00DB +\x07\x04\u00F9\u00DA\u00AF\u00EC.X\u00EAj\u00D9\x17\u00DAL\u009E\u00EF\x03\u00C6\u009C\tt\u008D\u00D5\r\u00B7\u00C4i\u0096\u00EF\u00C3\u00C6\u009C-\u00C0m\u0084\u00CB\u00B9\u00AB\u00D0\u00D7v\u0099\u009B1\x0F\u00C6]jG\u00EEmBV*\x05\x18hRE\u00C4\u00ADg\u00C66\u00F0\u00D2[\x0F5U\x1EC\x19\u009Db\u00E4\u00C1\u00F8\u00BD\u00BD\x1D)\u00EC(+R\u00D4\x7F\u00CB\u00B1<w\u009E\u00E3$^\u00FB\u00EA\u00A2\x16{\x17\u0095\u00D1\u0082\u0080X\x12\x10\u00FA\u00F1jq\x05\u00F6\u0098\x1Db\u00FE\u00B8\x1B\x17\u009Eso\u00B2\bL\x15\u0081\u00D9\u00FD\x0F\u008C\u009Dw\u00E2>U\x02P@\u00B2\u0092'P1T\b\u0086aZ\u00928\u00E8\u00854\x1D\u00A9\u00A3\u00CD\u009Ad\u00F3\u00A0\u009A\x04\x18|\x17\u008E\u009A;d\u00A0j\\\u00D90\x0E[\u0081\u00909\u0094\u00C6\u00EB\u00C6\u008C\x19\u00A7\u00F8\f\u00D6 d[\u008E-$\u00BD\u0094'\u0086*)_NDm#\u0080\u0090eAV:s\u00F4P\u0082);\u00D0\x05\u00C0\u00E5\u00E7\u00B3R\u00F3\x05\u00D2\u0092c#\u009A\u00AB\x00B8\u00FC6\u00C7\u00AE\x00B8T\u00F4\u008F\u00D5?\u00B3\x00|\x02Z\u00BEM\u00B1\u0084\u00A4\u008A9\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var eemg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02YIDATH\u0089\u00E5V\u00BDk\x14Q\x10\u00FF\u00CD%\x18\u00EF\u00D4p\u0081\u0093\\q\x07\u0087\u0085\u00C1\"\u00B8\u0082\u0085V.\u00D8\x04,\\\u00AC\x05SJ$}\u00D2\u00A5I\x1D\u00FF\u0083\u0088\u00A0`c,E\u0090\u00A4\u00F3\u00AB0v\u009E\u0085H\u00B8C\u00E5\u00C4\x0Bh\u00EEC\"#\u00F3\u00F6\u00F6n\u00DF~>\u00DCh\u008A\f\f\u00BC\u009D}3\u00BFy3\u00F3f\x1E13\u00FC\u0094\u00F3\u00D6\u00F4\u00AD\u00DCT\x0B\u00B5\u0083a\u00E1\u00FA[\u0096uH%\u00C1\u0086\u00B3\u00CD#\x1Bg\u0099\u00C10\u00B4\x11\u00A4\u009C\u00B6{c\u009Ei\x06\u008A\u00C3\u00A0\u009DS\u00FBxm\u0083\u00EB ac\u0088\u00C4\r\u00B9\u00D8?!\u00E7@\x0E=wX\u00F9\u0081\u00C1\u00E1\x07A,\u00AA \u00B8\u0081\u00A8\u0089l\u00A4\u00B9\u00BC\u00DE\u00F6\u0096\f\u00FE\u00A4k\u00BA\x1A\u0096X\u00F0d\x7F\u00EFmj \u008C\u008F\u009AF\u00B4[ZNU&\x10\u00D3\u009D'\u00C3\u0084\x0E\x13\u00FBs\u00F2\u008A\t\u00F2\x05L\u00EE\u00EA\u0092\u00C5\x15p\u00E5\u00E3\u009C&\u00F3\u00C26\u00AC\u00E6\u00A5u\x1E&C\u00D6\f\x1B\u008Fo1>W\u00EE\u00FA\u00F7\u00BA\u00FB\x03\x02%\u00DC;\u00B9/\u0086\u00A2\u00FE\u00F99S\u00B4\u00FF_\u00AA\x0EG\u0099@V\u00B0Hb#\u00A9\u00EEO\u00A3\u00F6@\u00EE\x07V\u00D7\u00BC{d%\u00A6\n\u009D\u00C2K\u0095\u00D7\u008B\u00EDQ\u00BE\u0085W\u00D7T'JM\x15\u00B5O\u00EF\u00E0R\u00AB\u00AA\t\u00EB$N\u0090_\x14}\u00E6\u00FC\u00DEtH\u00D6\u00AC=\f\u0081\u0084\u00FAa\u00AF\u00D0\u00C7\u00F9\u00CE1M(u\u00FEfj\u008A\u00C1Z\u00C1\u008F'*\u00BE+\u00FCB\u00F7\u00C4Wl]\u00AB\x06\x15\x15i\u00C1j\u0095\x17\u00A4\u00CD\u00AB\x00u\u00F3}\x7F\x10\u00A33\x12\x14\u0088\x01\u009F\u00E2?\u00BB\x18\u0087W\u00DB\u0099\u00DC\u00CEB\u0099\u00BC>\u00BA\u00C0\x04\u00AA\x11h\u009E\x1Ag\u009ER?\u00DF\u0093\u00B1L?\u008A\x1Cj;~\x1D\u00D3\x1C\x13\u00C8\u00C6\u0097\u008A\x03`\x0E\u00E5\u00C6\f>\u00CC\u00FE\u00C6\u00B3\x1BcxeC\u00DE \x1A\u009D\u00DB\x06\x1E]\u00EE\u00F3D\u00F7x\u009C\u00BD\u00F1\u00B8\x1F\x01\u00D0\"\u00DA\u00A5\u00FBxq\u00B5\u008A\u00A5{\u009Ex,Vaq\x05\u0098\u00E8\u00DDN4jrc}\u008D\u00D8VM\u00D8k\x15Q|s\u0093\u00D1\u009An\u00A6\u00DB2\x03\u00B4\u00A4\u00ADhC;\u008E\u00EB\u00B32\u0097\u009DL\u00C0\u00A9\u0080\u00EE\u008B\u0081\u00D5d\u0091\u00EF\u0085\ry9\u00BC7;L\u00DC\x0Fi\u009E\u00F2\u00AA\u0088\n\u00AB\x00\u008AC\u0083y\u00A7f\u00E1\u00F7\u00D2\x0E\\7\u00ECL\u00C0\u0091\x0E\x04\x00\u00B3\u00B0ya\u0089\x03\x07\x00x #&\x0B\x1D\u00B1^\r\u00E0\x0F\u00AD\u0097\u008C\x01\u00EE\x0B\u0092?\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var aamg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x021IDATH\u0089\u00EDV\u00BDKcA\x10\u00FFMHqA\u00889\u00B58\u00FC\u0080\u00A7\u0085\u00DA\x19P\u00AE8\x04\u009F\u00FA\x0F\u00F8\x07\u00A8w\u00A5\u00D8\u00A8p\\ca\u00FC\x0F\u0084X\u00D8\bw\u00DA\\u\n66\x12\x05\x1BE\u00D0N\u00C5\u00C2 ~\x0BFD0j1\u00B2\x1B\u00F3\u00DC\u0097}\x1F\u0089\u00EF\x0E\x0F\u00EF\x06&\u00BC\u00CC\u00CE\u00CCovfwf\u0089\u0099\u00A1R(\u00FFM \u00B9\"\x054\u00F7\u0085\u00D1\u00C4\u00A0\u00C9\x04k&\u00EE>l\x02j\x02\x0Bv4\u00D1\x04\u008E.\u00A4\u00E6a\u00C3\u00A2t53\u00CC\u00B4n2\x1D\x1B9K\u00E1!\u00CF`\u00C4\u00B0\u00DD\u00C2\u00AA\u00CC\x17\u00C2SA\u00DB\u0093\u00EB\"\u0081\f\u00DB\u00AA\x15Tr\u008C\u00D1\u00C8\u008C\u00B5\x0E\u00C9\u00B9@\u00C5\u00CFI\u00ED\u0084\\PX\u008BX\u00D4\u0083\u00C1\x14<Z\u00DFDx\u0091\u00A7\u00E7\x17\x1B\u00D3]$K]iYPWk+\u008F\x17\x1F\x06\u00B1\u00D1\u00FEP\u00982\u008D\u0093c\u00FC| \u0094\u0093`\t/\u00AB\x0E\u00D0\u009Bz.\n\u00C3T\u00D9\u00D3\u00B8\u00E0\u00B8\u0099nk\u0081\u00B2\u00FD\x17\u0096\u00EAu\u008D\u00E9\u00BCf\u0095@\u00A6\u00AB\u0082cy\u00C4\u0081\x11\u00F5\x15u.\u00B6T\u00F2\x1A\u00DF\u0096\u00ED!~\x13\u00B6\u0084\u00B3\x05\u00C0\x1FW\u00C6\x19\u009C\x10\u009F\u0096\x12]W\\\u00A1\x7F\u00B3\x1C\u00DBq\u00BBr\u00DF\u00B2\u00FD\u00FF\u00AEu\u0097\u0095=G3\x06~~\u00BAG\u00F4\u00CA+\r\u00F6\u009Ch\u00CDT$\u00E8\u00A4n\t\u00E6A\u00E8\ti\x04\u00C0\u0096\u00A2\u0092fp\u00DA5aVS\u00FA1T|\u00C2\x1CC\x03\x19\x16\u0092_\u00D8\u00A5\u00D0\u00EB\x1D\u00CF@a\x07\u00A1@Q\u00FF\u009B\u00C0\u00E2\"h\u00E3\u00F8O\x00\x13(F\u00A7u\x13bH\u008B\u0087\tvZR\x00J\x06\x0E\x17\u00A1\u0093\u00BB\u00DE\u0099\u00AA\x19d#5\u00F8\u0096\na]\u00E9J\u00B9\x0E\x15'\u0090\u0087\x07\u00E5\u00FA\u00E7\u00C9e\u00AC\u00C5d\x1B\u00B8\u008D\u00DC\u00E1\u00D7gF[\u00C6{\u00E0\u00FA\fc0\x12\u0085\x18\u00DA\u008E\t\u00D4\u0083\u00EB\u00F7\u00DFqd\u0094a`!\u00AC\u00B5\u00D1\u00DFD\x1A0\u0083\u00E7\x11E\f\u00AD\x00\u00CD\u0093\u0081\u00C3\u00FA)T\u009Ewc\u00FAk\x18\u00C9\u0084\u008E::\f4o\u00B9GS\u00EB\u00D8\u00F6\u00FC_\x13\u00DA\u00E8\u00CA\u00BE\u00CB\u00CA\u00F1\u00D5\u00B9o{\u00AA\u0094\u00E2\u00A7\u00A8g\u008C\u00C7\u00F3\u00C6\u00C0Y\u00F5\u00AAH\u00D1K\u0080\u00FF\u00B7\u00CC7\x0E\f\u00E0\x11\x1B:t\u0093\u009E\u00FCv\u008F\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var ddmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02GIDATH\u0089\u00EDV\u00CFO\x13A\x14\u00FE\u009Ei\u00A4\x18c\u00DA\u0084\x18\u0091j\u00D6\u008B\u008D\x17\u00E8\u0081p2\u00E9\u0082\x17\u008E\u00C4\u0093\x07A\x13/\x06C\u00F4\u00E8\u008D\u00BD\u0098\x18cB\x13#g\u00E8\x1F\u00C0\u009D\x03\u00A1\x07bb\u00C3AN\u00C0\u00C56j\u00C5\x1F\b\u0091\u0083-bxff\u00E9v\u00BA?\u00A6K\u0097\u0080\u0089|\u009BIvw\u00DE{\u00DF\u00DB7\u00B3\u00DF\x1Bbf\u00A88\x03\x17b\u00E2\u0091\u00D2\u00B0\u00CD\u00D6)\u00E9q\u00F1\u008FA \u00B3\u00F1\u008Aa\u00E1:3\u00FA\u00B7YX\u00B7\u008E\u00E1F=\u00A6EE\u0093\u00E5H\u0083\u00A9z~\u00AFA\u00C1\u00EC\f0Ll\u00A4r\u00EA\u00BB\u0096\x14Z\x03O]\x02'\u00E9[\u00CF\u0092\u00FAl\x17\u00B0h\u00DA\u00B1G+ \u0091\u00DE:]cpYr:\u00D5\u00ADc\u00E5\u00DCo\u008E\u00FF\u00EAh\u00FE\u00A4\u00D9\u00C7\x1C\u00FAs\u00B4\u00D9\u00B6,\u0084\x0E\u00DA\u00C8m;\u008B\u00CD\"\x17T,\u00ECf\u00F7\u00B86m\u00B1\x0B\u0090\u00E6I-\u00D5\u008Dw@~\u00E8'_\u00D8J\u00B8\u009D\r\x00\u0086b\u009AA\u009A\u00A7\u00E4]\u00E1\u00EA>\u00BA?\u00DEbp\u00C1\u0097\u00D9'mC\u00AC\u00A2.\u0091H\u00D5\u00FE\x07\u0097\u00EA\u00E4\u009C\t\u00C4\x07\u00CB\u00D7F\u00DA\u00C5,0T*\u00D1ng-\u00C8$\u00E60}6\x18\u009F\x14\u00A2\u00B5\fP1\u0080\u00DEj\x07MX\u008C\u0091\u00FC<\u00A7\u00DE\x0F7y;?\u00EA\u00ABI\u0096Z\u00A7\x1B\u00CB7\u00F7\u00F0\u00FD\u00D2x\u00DD'|\u00B5\u009F\u00DF\x07z\u00CA\u00AF\u00B9kc\u00DA\u00CB,TO\x1Do\u00B36\u00DB\u00DDE\u00C6V\u00D7\x07U>\x1A>>/\u00E5\u00C4j\x1F\u00C3\u00BE\x12\u00816\u00C1\x130\u0083\u00E6B\u00EB\u00B1\x0E'\u00B7=#\u00A5\x1D\x05\u0091\u00B2\u00FE?\u0088\u0085:4\u009F;\u008E\u0089Xv\u0094\u00B5\u00BEE\u00CA?a)S_\u00AE\u00E4\b\u00948l\x10\u00EF\u00B9\u00C8\u00DB\u00AE\u00DC\u00C8\u00A0\u0098\u009D\u00C2\u00A8\u00D2\u00B1\x06\n\u00C0\u008B\u00B1}\u00C4\u00AB\x15$7\u00C7\u00DC\u00ED\u00CC\x17>\x7F\u00B0\x15J\u00C9\u0082F\u00FF6c\u00EE\x1E\u00A3\u00DA\u00B9+NbA2r\u00F4\u00BBz'\x01<\u009D\x01\u00EE\u00BC9\u008B\u008A\u00F1\b;\u00C92\u0081F\u00DCf1_\u00E7\u00DB3v\u00F9\u0082 \x1A\u00C1\u00B3\u009Cwr\u00C2\x02\x1E\u00BC\u00FC\u0083\x1F\x17\x17\u0090*=\u00D4\x1E\nZ\t\u00A3\u009F\u0098:R>Xby_\u008B\u00D7\u00D4\x06\x12.N;\u00C4\u00A2\x01|\u00BD\u00BC\x04\u0086qX\u00FF#Q\u00FA(8\u0095\u00CC\u00E3\x01\u0080\u00BF,\u00FA\\\x0EmE$\x01\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var ssmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02&IDATH\u0089\u00E5W\u00BDJ\x03A\x10\u00FE6\u00D8\x04A\x12H\x11\u00A2\u00E2\u00A5\u00F1\u00A72\u0085X\t9}\x01\u00C1\x170u\x1A\x1FA\x1FA\u00F0\x05\u00CC\x0B\u00A45\u0095Ia\u00A3\bbg\u00E7\x7FD\x04\u008D\x16J\b2\u00B2{?\u00B9\u00CD\u00EE\u00DDes\u008A\u0082\x1F,\u00D9\u009B\u009Dofgvv\u00EE\u00C2\u0088\bA\u00A4\u00BC9\u009B\u0083XII\u00CB\x1C\u009C\"h\u0084\f\u00FF\u00D5\u00DB`'v_*4f\u0089\u00F00\u00B5\u00AB\u00A5H\x02\x06\u00B6#X\u00A0\x1D\u009DW\x1B\u00C7e\x12\u00E6\bv_\u00EEN\u00C4\u00C3\u00FBx\x0FK/\x14\u0094)>\x07\x11\u00A9 \u00A5\u0081o\u0090\u0081Y\u00CA\u00E6\u00FC8\x03\x1BK\x05X\u00B6;-\u00F9l\u009F\u00E5\u00854K\u00A4\x0F)2\u00DE\u00D7lg\u00E8Xc\x13\x11\x05\u00B5\x1C<\u00AB'6\u00F1\u009A\x11\u00A3\x1Fix\x12\u008D\x11\fP\u0084\u00F0X8\u00F2R&\u008D\u00DA\u0096t\u00F0J\u00B6|\u00E1S\u00BE*\x11\u00DB\u00D3\u009FZ=\u009D\u00D0\u00ADE\x0B\u00EBg\u0084\u008Ft7L'Q\u00B6\x7F\u00E6\u00A8\u0086\u00C1\u0098v;N\u00D5V\u00BCg\u00E9\u0082\x06\x11\u0092,\u00DB\u00CF\u00F4qY9\"\u00E5\u00BE\u00FCn\u00CCn\u00AC|\u0094\x06\u00E4\u00A2\u00B6\t\u00D4\u0092\u00D8J\u00BC\u00B5-\u00B54\u00F9x,\x1C\u00C5V\x18o\u0094\n1$i\u00FAl\u00B7\u00A7?%\u00F2S\u00BE:<\u0099\x1F\u00D5\u00D2\u008BC|\x1F\u00EF\u0085\u00D7\x7F\u00D8\u00C2G\u00BA+.\x06\u00C12'\x132\u0083\r\u00ED[oU\u00A2\"I\u00E49\t\u00925\u00CF\x04\u00D0\u00B6\u00820\u0088\u00EB\u00D1\u009Ei\u00A2^\u009156\u00F6\u0081\u00C2\u00F5\u00AArm\"`\u00E4X\u00E0\u00CE\x02\u00F6\x06Z\u00D2r\u008B;62\u00F3k\u00A9\u00FE\u009Bg\u00EC\u00B6\u00BC&.\x16\u0081\u00B7\f\u00802pQR\x15\x1DY\u0093\u00C1\x06&:\u00C0\u00FC9\x7F\u008E<\u00F3\u00F8\u00AF2\u00A7\x0F_b\u00ED\x12\u00B8\u00B7\"u1y\x05\x1C\x16\u00F9\u00ACH\u00A0\u00AB(\u00D5\u00D8T\u00BB\x06\u00B28X\u00E8\u008A\"\n\x03_\u00E3:@6\u00CE\u00A9c8\u00A2\u00AF)\u00BD\u00F09w\u0083\u00BDm\u00F5%\u00C2e\u00CF\u00B9\x1B#[&\u00CA\u0082p[l\u00A0\u00BE\u00D9w\u00CA\u00E7\u00B7\u00C5\u0086\u00B1\x1DS\u0082\u00FF\x06<]\u00E9\u0089\u00E1\u00FEm0\x1D#\u00F7j\x06Vqk`\x7F$\u00FE\u00FFzI\x00\u00F8\x02\u00CD\u00E0\x7F\u008F\x7F\x19)\x15\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var zzmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02[IDATH\u0089\u00EDV?h\u0093A\x14\u00FF]\x14L\u00E3\u00BF\x14#*DHA\u00CC\u00A4d\u0090\u00BAfwHp\x16\u009A9\u00E0n&\x05Q\u00DC*\u0082\u00E0f\x17W3\x15\x1D*\u00EDX\\\u00D4I;)iK\u0085\u00D6&\x04\u00CC\u009F\x12x\u00F2\u00AE\u00BD/\u00DFww\u00DF}W\u0083v\u00D0\x07\u0097\u00DCw\u00F7\u00FE\u00DD{\u00BF{\u00EF\x04\x11!L)5\x17\x10%9\u0091\x1C\u00DB\x176Q\u00F9@<7D\x1C:z\u00A7Gc\x1DWI\u00CA\u00FB\u00E9\u00D0)\x15\u00E1n\u00D6H\x14A\u00A2\u00B10\u0096R\u00BA\u00D9O\u00B6\x05\u00F9I\u0088\u00B5\u00A9\u0093\u0093!\x15\u00BBc\u00DB\u00B4;Vo\x12\u00EE\u00BDT\u00CE\u0095\u00E4Z\u00B0\u00C9\u008B\u00FB\x1Be\u00B5\x16U{\u00F7\x01\u00F0=_\u00F5\u008A\u0098\u00D3\u00DB\u00C4@\u00B8\u00C8\u00A99\u00B0\u00A0\u00B0\u00A3S8\x1F\u00C1\u00C9e\u00A6\u0090\u00E5\u0090\x04\u00E1\u00E1\u00F1\u00F3\u00D4(\u00CAg\nV\x03f5X\u00C1Al\u00C3\u00C3t\u00FB]\u00A5i\u00AC\u00CD\u00AE\u00F0\u00EF7\u00A7\u00DBh\u009Fk\u00B0kX\u009Fy\x0BB\u00C1v\u00A4C\u00C1\u00CE\x19\u00C8?\u009E\u00AA\u00A3\x13\x16;\u0097\u00EA\u00D6\u008D\u00A4\u0088\u00A2?5\u0094\u0097|\u00FBb\u00DD\u00C4\u0084\t\u00922vs\u00AD@P\x01\u00C5\u00A2\u00C0\x14\u00DE\u00CA\x7FQ\u00A5$\u0082\u00B2\u00FE\u00D40\x19a\u00DD\u00E9+\u00F2\u00BF\x18J\u00E1\u00A7\u00CC\x1E\u00A5{'t\u00D6\u00E3\u0086\u00F0\u00C3g\u00C7\"\u00DFk\u0082\u009D0\x04\u008Dh\x0B\u0088\x1A\u00DE\u0097\u00A3\x1CE\u0082h\u009Fo%F\x1B\u0083\u00F4 8\u00E3\u009De\u00C2\u00DA\u00B5\u0091\u008CA\u00A8(\u00C5\x06\f\u00DD\u00B3$\x15\x10jI)\u009C\u00F8b\x1C\x1D\u00B6'r{\x12\u009A\u00C8\u00EB\x7F\u00D70\u00F7\"1\u00C8\f\u00F9-\x12[rt\u00F2\u00C1\u00AF\u00C4A/\u00B3\u00CA\u00BDK\u00AB8%Yi\u00C2\u00BD\u008C\u00AB\r7\rK\u00C9rV +\u00D3V\u00FE)^\u00CF\u0091\x1C\u00BB\u00B9\u0096,q\u00BAA\u00BD'\u00F2\u00BE\u00A5/z\x1B>\u00E8\u00D0\u0084\x1B\u00ED\u00E8\u00A9~\u00D3\u00A0\x1Af\u00E5\u00D3i\u00B3\u00F0\x1C\u00CD9\u00A0\u009B\x1Do|\u00D6\u009E\x17\u00B7\x17\u0080\u00FB\u00F5=\u00A4\u00FB7\t\u00F4\u00D1\x0B\x17\u00AE{, \n\x00\u00BEFj\u00B7\u008D\u009E\u00D4\u0080\u00F2\u00E2:\u00A6w\u00AE\x13\u00A8\u00E3c\u00D8\u008D\u00EA\u008D\u0099\x17x<\u00EF\u00D6p\u00A6\x03,U\u0081\u0095[\u0097\x01\u00B4E\u00FF\u00E4\u00AA\u008FaWnK\x12\u009D*\u00A7\u008F\u00E6\tK\u0095\u00FD\u00B6\u00C7/\u00FF\u008D\u00C2+\u00F9\u00D8\u00D2\u0090\u00EE;bC-:\u00B9\u0086\u009Cd\x7F\u00BC\u00F1\u00CD\u00DBa\u00E8\x7F\u00AD\u00FE;\x04\u00E0\x17\"\u008B'\u0092\u00C2\u00FD\u00AFr\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var ccmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x02BIDATH\u0089\u00EDV\u00BFK\x1CQ\x10\u00FE\u00DEi\u0091\u00BB\u00D3\u00E4@A\x13\x14\u00BC&\u00A9\x12\x14R\u00A4\u00BCV$\u00DC\u00FD\x01\x01\u00AD\u00EF/0U*\u00B5T\u00B0I\u00974ic\u0091&\u0085`J\u00BBKl\u00E2ub\x14\u0095\u0093\u009C(z\u00BBp22\u00A3\u00BB\u00EE\u00DB\u00B7\u00F7\u00F6\u00C1\u009A\b!s<\u00D8\u009B\u009B7\u00DF\u00EC\u00FC\u00F8\u00E6\x14\x11!*9~V\u00C7\u008F\u00EB\u00A1\u008E-\u00C4\u00EA)\u00B1\u00C0\u00B8\u00D2\u00C3\u0087W\u00F05\x1F \x10\u00DEl8\u00FA\u0088K.\u00B4\u00F4\n\u00BEz\x06RP\u00A4\x0E\u00C7\u00B7\u008D8\u00C5\u00D3\u00C1\u00D86c\x051'b\u00C6\u00C5j\u0090\u00EB\u00F9\u008B\x16\\\u00ED\u00BB\u00E1\"t\u00CBQ\u0087\u00C16\u00A1\u00B4\u009B\u0081\"\u00D9-T\x05_^\\\u00CA\u00B3\u009F\u00F7\u0090)\u00DA\u00D4D\u00D8$\u00D1\u00B3\u00D6/6\u00D1j\u00D4\x1A\u00AD\u00A3\u00DA\u0090\x1A\u00C9\u00E9\u00E4}\u00D1\u00FF\x1E\u00DE\x05\u00A1\x12\u00B5\u00BD\u00EE\u009F\u0098B\u0094\u009D\u00BC\x1F:\bN\u00F3y7n\u0097\u009C\u0090N\u00F1\u00C8\u00D0\u00BD\u00DE\u00EASPs\u009A.\t\u00D9\f\x0Fs\u00F0\x1Ex8}DQ}\u00A6l\u00DF}\u00A9\u00EE\u00EF\u00B2\u0082\u009At\u00BAmd\u00F6|\u00A0\u008B\u00F9\x0FL\x1F\u0093iU\u00E8\u00D7\x10/\x06\u00BB\u0098:\u00EB\u00BB\u00F9\u00DAPKj\n\u00C0\x0E\u008061\u0083\u00D8\u0090\x19MP\u0083\u00AE\u00E2\u00E7\u00CF\u00B3\u0084\u00FA\x1A%\u00D7\u00DFl\b\u00DDAp\b5\u00B7\u00DE&T\u00B4\x01\u00E1\u00D3\x1A\u00D9O\u00EDm\x05U\u00C2\u00DA\u00EC\x06~\u00C6\x12\u00FE\u00E3\u00D5\u0093\u00D4l\u00DF\u00D0\u00E7\u008A\u00D0\u00F5\u00EA\u00BB[\u00E4j\u00C3xo\u0097\u00A1\u0098\u00C0\u00AF\u00F2W)a{\u00E8\u00ED\u009D\r\u00C6\u00FD\u00F5v\u00A6\u00B0\u00B3H\u00A6\u00A8\u00FF]`\u00DE=<\u00E8\u00F2\u00BF\u00C0\u0095b\u00D2\u00C4\u00DA\u00D3\u00BC\u00B7\u00B8\u009F\u00A3\u00A3\u00C9s\u00CE\u00AB(FQ \u0094pQ\u00D8tY \u00D6\u0081\x122a\u0080$B\u00D1\x03\u00A8\u00C8\x02e\u00A6\u00E2s0\u00B6\u0092\t\u00D89\u0080h6^2\u00BD\u00CA\u00A7\u0094\x19\u00D89\u0080\u00E00g\u00EDM|J\u00F3\u00E7<\u00C7\u00C2\u00A6\u00ED\u00E1-|\u009B\x19\u00C7\u00FCG\u00BBqS\u0096J\u0099@;\u00BDL\u00DC\u00BA\u00BAS\u00DC\u00E45%\u00A0\u00EB5\u00E0\u00E1\u0089\u00FD\u00C2\u00E22\u00B0W~o\u00B5qM\u00B5\u00D1\u00C1\u0084\x1A\u00A7\u0094\u0097\u008FTu\u00BDJXX\u00BE\u00AD9O\u0083e9\u00FF\x11\u00CA\u0094Y?\x19\u009A\u0096\x17+\x1D/%\u00DA\u00FC\u00E7\u00EA\u00BF\"\x00\u00AE\x00\u00BC\u00E7xhL\u00E9\u0093@\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var xxmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x01L7\u009E4\x00\x00\x00\tpHYs\x00\x00\x01\x1B\x00\x00\x01\x1B\x01\u008D\u00F7N\u00E5\x00\x00\x01pIDATH\u0089c\u00FC\u00FF\u00FF?\x032`b@\x03p\x01Fu\x06\u00B0R\f-D\u009A\x01\u00D2\u00CF\u00C8\u00C0\x18@\u009C\x198\u009D\x017\n\u00EA\x1C8\x00\u0099\u0080\u008C\x19\u00FE3\x04 \u00F3\tZ\u0081W\x01\u0086\u009FH\u0097d\u00FC\u00C9\u00F9\x03\u00EC\u00F2\u00EC\r\b{`\u00AEc\u00B8\u00A9\u00FB\u0087A\u00ED\u00FF\x7F\x10\u0086\u008B\u00A1y\u00A7\u0081h\u00EF\u00E0u-\u00C1\u0080 \u00DB\u00ABdk\x06\x07\u00CD\u0094\u0086\u00FF\u008C\u00B7\u00F4\u00FE0>S\u0088\u00C6\u00AA\b=\u0082\u00C1\u00DE\u0098\\\u00FF\x1F\x16lp\u008C\x16R\x18A\u0089\x14\u00A4\x01\fY\u00EB\x11\x1A\u00BF\u00F2\u00FC\u00C1\u00A6n\u00E0\x02l\x10F\u00D5\x10\u00D4\f*u\u00C0)\x0B\u0094\u00C2~r\u00FE\u00C0\u00A9\x1Bk\"AN  \u00FC\u0083\u00E3\x076u\x18632060\u00EC\t@\x15\u009C]\u00CEN\u00AC\u00B3/`\u0088\u00B8\u00AD\u00FBK\u00BC\u00B3\u00BF\u00F2\u00C0\u00CB\x13\u00B0\x17\u00D0JC\u00BC\x19\x03\u009E9\u00B0\u00E4\u00A4\u00C1\u00911\x06N3E~\x1E0W\u008FZL\n`!G\x13\u00B4mc\x00\u00E5^\u00F8\u00CF\u00F0\x7F\x03\u00C9\u0086\u00E0\u00CBm(\u00B9\u00F3\u00A9|48\u008B\u00A3\u0097N\u00B0\u00EC\x0E\u0092\u00C3\u0091\u00E5I*\x060\u008A\x04\u00A4v\nN\fRC\u00A4\u00E5\u00C4\u00C6\u00B1\x01\u00C3\u00AE f\u0082\u00AA j\f\b\u00AA#)\u00A8\x7Fp\u00FC\u00C0\x1A\u00CC\u00C8\u00C1\u008D\u00A3R\u00A0\u00B8\u00D0\x047\u0086\u0084_\u00CEex\u00A8\u00CA\x02\x0F\x01P= \x7F\u00FB\x0F\x03\u00FB\u008F\bR\x12\u00D9h\u00C95j1m\x00\x03\x03\x03\x00\u00FF\u0096O\u00ADj\u00B5f\x15\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var posmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x06\x00\x00\x01\x06)\u00D2\x12\x00\x00\x00\tpHYs\x00\x00\x02\u0095\x00\x00\x02\u0095\x01?\u00E3*L\x00\x00\x04\u00FAIDATx\u009C\u00ED[Oh\\E\x1C\u00FEFC\u00B0\b\u00B2\u00B6\u0088\u00B1e\u00CB\u00BA\u00D2$\u00A2\u0085\u00D2m#\x1E\u00A4\x116\u0090\u0083`\x11\u008B\u0097\n\u00B9\u00B8\x15J\u00D1C!\u009E\u00B4x\u0090\x1E\x0B\u00F6\u00D0x\u008A\u00E0\u00C5P\u00B0\u00FE\x03a+\u00A6=\t\u00B6\u00DAB\u0082V\u00D9mB1\u00D5\u00A6\u00ED\u0096\u0084tI)\u008C\u00CC8\u00F32\u00EF\u00ED\u00FCvg\u00DD\u0097t\u0091\u00DF\u00F7\u0098}o\u00DE\u00CC\u009B\u00F9\u00E6\u009B\x7F\u00EF\u00F7fVH)\u00D1\n\x0F\u00B5\u008C\u0091~$\x011l\u00CE\u00D2\u00B8\u0092\u00F6\u00CF\u00F7/\u00EBX\u008A\u00B8u\u00D0'\u00C7\u00FF\u00EA/\u00DA\u00BF\u00C1\u00A5\u00EB^1\x07\u00A0\u00899bZ\u00BF\x16\u00B9\u00C7}BB\n\x01Q\x04P3\u00FEi\x1D\u00B9\x0B\u00C5L-\u00B7\x07\u0097\u0090\u00AD\u009B\x10$\u00E3F\t\u0089\u009BO\u00D5\u00F1\u00D8\u009D\u00B5D\u009D\u008A\x16\x10S\u00F6^\x14az\u00FBMq\u00F2\u00D8\u009A?\u00D1\u009Bv\u00B9\u00FEf\x0E3\u0085I7\u00FC\x7F\\k\u00A9\x14-\x156\u009C\u00C8z'\"\x16r\u00B7\u00C4\u009B\u00D3A\u00F5\u00AD\x06Q\u00B1\u00F7Nc_\u00C2\u00A7\u00EFH\u00A7O\u008D\u00AB\u0091\x14\x12\x05s\u00BE`\u00CE\u00E3Q\u009C~\x19\u00C5_\u00D3\u00A4\u00BC?\u0096\u009B\x1A\u009D\x01\u00A8\u00B9\u00F0\x10\u0080\x02\u0080*\u0080\u00E3^jQ\u00CA3\u00BBk\u00A8\x0E\u00DCu\u0098\u0094\u00CC\u00F5\x01s.9L\u0087]&\u00F1\u00A1!\u00D1\u00DD)\x07\u0089\\\u00EA\u00C3\x027\u00FBuJ$\u00B5A;\r\u00A46^3\u0099\u00F5\x04\u0093\u00A1@\u0092\x11_\x1F\\\x15\x1F\u009DH\u00B5\u00AB\u00E9\u00C9\u00E7\u00F0\x19)\u00FE\u00CA\u00FE\u00E6\u008D\u00E0\x1B\u00A1\u00F5t\u00D0/%.\x0F\u00BD\x14\u00FA\u00A2\u00D7\u0090\u0086\u00C4\u00E3\u00DE\u00FB\u00E7GW\u00DC\u00E9#\u00FE\fE\u00E4\u00CA\u00CE\u00FB\u009E\f\u00C6\u00AD]gf\u00CA\u00B2\u009D1\u009D\u00EB)s\u009E\u00F0fx\u00E9\u0085\x12^\u00BE*}\u0084\u009A*C\u0091\u0081\u00C4\u00ED\x04)\u00E9\u00DC/;\u00FErh\u00DA\u00F1\u00E9>^\u00BB_\u00EA_\u00E2EDBn6\u00AF\x03\u00FA\u00B5\u00C0q\u00EA\u00FE\u0088\u00E3\x1FI\u00B6\x19\u00BCv1\u0083#\u00C7\u00FC\u00B9\u00F2t@\u0080\u00C9P`2\x14\u00B87Q`2\x14\u0098\f\x05&C\u0081\u00C9P`2\x14\u00BA\u009F\u008C\u00B2k\u00B4}3\u00BBg2\u00CD\u00CC\u00C4\x17cR\u00DBc\x10\u0099`2\u00D8wm\x00g\u00F7{\u0083:\u00C2\u009F9\u00E0\u00E8g\u00BD\u00B8\u009E\u00FD\u00C3\u009B\u008C\u00D7TQv\u00D3\u00F9\u00D1\u0095P\x03\r\x12\u00F9f~'^N\u00A7=\u00B3\u00BB\x16d\u00AA\b\u00881}\u00B1\u00F9\u00C6=O\u0098]l\u00BA\u00ED,:\u00A9s\u0085\u00F2\u00C7\n\x0E9\u00A7/\u00E6w\u00F4\u00D8\u00C5\u00AA\u00A6\u00CAh\u00E6\u00CA\u00E2\u00FB\u00FD\u00F9\u00A3\u009E\u0092\u00D9\u00EF\u00AE\x13\u00AEE\u00E9\u0084Y#\u00AF\u00A2\u00BE\u00D3z\u00D5\u00B9\u00B2\u00F3>\u00A5Nc\u009BQ\x06\u0096\u00AA\u00DB'\u00AE\u00BFO4\u008FZ\u008Bf\u00F3\x1E\u0080<\u0080\x0B\u00DE\u00D0\u00B7\u00BFz\x18C\u00D3\u00C0\u0093\x0B\u008F\u00B4T&R\u00C7\u00C3\u00DCc\u00CA\u00E6\u00DD;\u00C98\u00ED\u00A4\u00DD\u00C4\u00BC\x050\u00F6}FT\u009F=\u00E5\tQ_\u00B5G\u008C)[5f\u00EE!k\u00EE\u00AA\u00D6\u0096\u00F0G\x107\u00B6\u00AD6\u0093\u00D4OFU\u00D5R\x06\u00A8?\u00DA(%\u00A0\b\u009C\u008D\u00A9\x0B\u00F9\u0089s]s\u00FD1L\u00BD\u00D5\u00AB\u00BD\u009B\u00EE~\u00EE\r'\u00BB\u00EFLa\x12\u0095\u00C1WB\u00BF\u00C7\u00848\u009Df\u0093\u00C5=6U(0\x19\nL\u0086\x02\u0093\u00A1\u00C0d(0\x19\n]57u\x13\u00BA\u00AA\u0096\u00BA\t,\f\x01\x16\u0086\x00\x0BC\u0080\u0085!\u00C0\u00C2\x10`a\b\u00B00\x04X\x18\x02,\f\x01\x16\u0086@O\u00BB\x0F\b\u0088]\u0098-\u00BC\u00AB=\u009BVN\u00CB\u00FC\u00AF\u00DFl\f\u00D5\u00F6  r\u0098-\u00FC\u00BBm\u00E9\u00B9\u008B'$\u00E4\u00A5\u00B6\x12h\u00EBK\u00E9\u00C7\x1F\u00E8\u008Dc\u00DA\x1D\u00FCA\u0086\u00EE}~\x10No\u00DAv\u00F9\u00AA\u00EB6\u00F8\u00B6!\u008C\u00D9\u00B1\u00A7\u00DC\u009E\u009A\u00C4\u00CF/\u00D6Q\x19<\u00D5\u00D5\u00C2\u00FC\u00BDuU\u00FD#,\u00E2M\u00ACR\u00A4'L@\x06\u00CEb\u0093\u00FBg\x00{\u00B8\u00DB\u00F1\x0BfA\u00CA=\u00CA\u0089\u00B4&\x12\u00E1\u00B14\u00D2\u00E4\x1D,\f\x16\u00FB\u00EA\u00BA\x19Z\u00E5Uk\u00A9mYjS\x18u\x14\x13\x02\x1C7.\u00DAj\u00A9\nk\u00B7f:\u00CFL9~u}\u00C0\u00A4]\f*\u00E0Bv\u00D1\u00EE\x1D\u00D5ePeY\u00EC\u00ABw.\u008C\u00AB\u00B8\u00CA@-)\u00CE?\u00F3a\u009B\u00C2\u0094=5_N\u00B4\u00A4\u0092'\u00CE\u0084\x11\u00C2w\u0084\u00B5\x18\u00B5\u00A9Vq\u00B6\u00E2\x04\u00B7\u00F8\u0090\u00BE*1\u00A6\u00FE7\u00D3AW\u00B2\u00C2\u00C4\u0084H\u00B6\x18\x13'\u00D9b\u008A\u00B6u8\u00FF\u00D3!W<\x1Bx\u00CC\u00EDX\u008Ex\x7F\u00FB\u00C6\u00B2)\u00CFp\u00C7\u00C2x[\u008E\u00DAg\u00DDb\u00FF\u00B6\u00A7+\u00B9G\u00DE\u0089\u00E7k\x11\x15\x1B'\u00B1\u00B3\u00D9\r\u00F7\u00EE\x01Op\u00C8\u00E0\u00F2\u00D0\u00F2\u00FA\x0E\u00BE\u00B5-KQ\x06\x01\u00D3\u00B5\u00AF\u00C5l\u00A4k\u0098\u00AE\u00D5\u00D8\u00B8\u0090]\f\u00E5\x10\u00FE\u0082\u0097\u00B9\u00B5\x1D\u00E7\u00B2?\u00E2\u00A7}O\u00E3\u00BB\u00D7{\u00B1m\u00AE\u00D5\x13\u00EE\u008E\u0084\u00EA\x7FzK\u00EB\x14\u008Ac\u00F1\f0z\u00FA\x1E\u00F6\u009E\u00BB*\u00FB\u00AE\r\u0086\u00A6\u00C8\u00AB\x04\x04\u00D8V\"\u00C0\u00C2\x10`a\b\u00B00\x04X\x18\x02,\f\x01\x16\u0086\x00\x0BC\u0080\u0085!\u00C0\u00C2\x10`a\b\u00B00>\x00\u00F8\x07\u00C2h\u00C4\u00C5\x7F\u00C5\u00A3\u00B0\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var fadmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x06\x00\x00\x01\x06)\u00D2\x12\x00\x00\x00\tpHYs\x00\x00\x02\u0095\x00\x00\x02\u0095\x01?\u00E3*L\x00\x00\x04\u00F0IDATx\u009C\u00ED[Kh\\U\x18\u00FE\u008EUi\u00D1\u00C5d\u00A3\u00B1\u00D6v\x18|\x14D\b\u00994\u00B6\x0Ba\x02]\b\u00ADt\x15\u00BBH\u0084,4\x14Dp7\u00CBvS)\u00B8h\u00A1\u009Bf\x17p!L\x0B\u008D\u008D]\u00A50\x11\u00BA\u00ECC!\u00C1\u008A\u00C6f\u00D1\u00A4)Q\u00A7\x18dH(\u00FCr\u00CE\u00DC{s\u00EE\u00BD\u00E7\u00BF\u008F\u0099I:\u008B\u00FF\x1B\x0E\u00F7\u00DE\u00F3\u00BA\u00DF\u00F9\u00CE\u00EB\u009E\u00F3\u009FQD\u00844\u00BC\u0090\x1A\u00A3\u00FB\u0091\x14T\u00C5\u00BB\u0092\u00EF\u00CC\u00F3_o4M,M\u00DCw \u00F4yn\u00D2<\u009F\u00BAO\u00FA\u00BA\u00CB\u00A5\u00EB]1\u00DFCK\u00BC\u0096\u0090S\u0081\u0098P\x13&\u0096!\u00FE.QD\u00D0\u0092-r/\u008A\u00D9\u00B5\u00B7=\u00BF\u008C\u00FC\u00BAA\u00AB>\u00AA~\u00DDX~\u00E4\u008Ak\x10\u00D4\u00D7z\x7F\x13C\r\u00BB\u00FE\u00C8\u00BB\u00CE\u00E9{\x10\u00AA\u00BE\u009F\u00F1\x7FT\u00FC\x03\u0097\u00CFZ\u00F1\u00C3\u00BDi\u00C0~NrX(O\u00E7n$\u00B95\u00EA\u0089\u008C\u00BAR\u00B4\u00AE\u00B0\u0091Lv:\x13\u00F5\u00F8\u00E0\u00BA\u00FAl\u00DE\u00EE\u0098|\u00A7\u0084\u00AA\u0084:f\u00D0\u008Fn\u009E\u00DE\u0088\u00F4+\u00FB\u00F7\u008F\u00DD!\u00A3\x03\u00F0\u00B6&\u00DF\u009Fy5\u0081q_by\u0082\u009C\u0097\u00DF\u00D9\u00C0\u00BDcM\u008BI\u00C9\x1F\u00E6\u00ED\u00ABw_\tO\x056\u00C5Hw\u00E7\x1C\b\u00C5\u00AE\x0F\x0B\u00D2\u00ECw(\u0093\u00AE\r\u00DA\u00DD@\u00D7\u00C6k!\u00B3\u0093\x102\x1CX2j\u00FE\u00E4\u0096\u00FA\u00E6\u0092\u00B3\u00AB)\u00A8\u0092\u00FE\u00FAc\u00D3BM\u00BA\u00C2\u00CD\u00E4\u00F3\u00E5\f\u00A9\u00B5\u00B7\x1E8\x13\u00BAFh,\f6\u00F4\x10\u008F\u0095Cc\u00B10o\u008A\u00B2W\x02iqBa\u00BF\fo\u00D8\u00D3G8\x1DG\u00A4~b\u00CB\u009D Ff*2\u008B^H$\u00F3\u00F3\u0087\u0093\x18\u00AF\u0093\u008BP\u00B22\u008EO`\u00FBE\x11\x12\u00B1_R\u00DE\u0099\u00941\u009E\u008F\x0F\\2d\u00C6\u00EB\u00CED\u00ED:\x7F\u0086\u00C7\u00F9\u008B\u00CE|e:\u00E0 d8\b\x19\x0E\u00D2\u009B8\b\x19\x0EB\u0086\u0083\u0090\u00E1 d8\b\x19\x0E\u00BDOF=\x18\u00B8m\u00D67\u008BC\u00D3\u00CE\u00F0\u00D6\u00BA\u00A8\u00C4e\u00EA\u00ED\u00A8\u00C7\u00C2\u00D5\u00F5\tR\u00B3\u00E3\u009B\n\u00AA\u00E0L\u00E8\u00FC \x1Fj\u0098\u00A5\u0084k\x17\u00CCZ\x01T\x13v\u00C5\u00C87Q\u0085\u00FC/\u009F%o=\u00F6w\u00F6\u00D5\u0081N`m\u00E1gy\u0091\x15^b\u00C9\x10\n\u00ADB\x0E6\\ic\u00D5\u00E4[\u00EA02\u00FB\u00D4\x11\u00E6\x7F\u00FCL\u00C1e\u00CDk]\u0097\u00B8\u00EA#P+\u00CF\u00BB\x1F\x15\u0082\u00F7$U\u0093a>\u00F2\u0090\u00B0t\u00F8J\u009A2\u009EQ\u00E4\u008E\u00E77\x17Y\u00DC9\u00D5\u00C3o\x1F<\u00E3\u00D4\u00897\u00E0\u00AF\u00CE\x01+E`os\u0094+\u00A1\u00A7\u00C2\x1D\x00\x17\x004\u0092\u00E2\u00C5p\u00E6\u00C6\x1E\f\u00CF\x03\u00AF\u00AF\u00EEMU&P\u00E7\u00C6\u00D8f\u00922\u0096\"\u00FEo4\u00F2\u00ECV&\u00A1\u00CD\u00F0dt\u008FrT\u0095m{\u00D4\x04l?\x10\u008E\u00BB\u00EC\u0093A\u00FC'\u00FB7s5\u00E0\u00A0\u00AA\u00FE-\x00\u00CDWbR\x12\u00E8O\u00EB\u00FE\u00AA\u00EDG\u00A0[\x04j\u00D8qB\u00A8}\u00F1\u00B2W\u00C9?8\u00C3\u00D9.\u00BAP\u009E\u00C6\u00D2\u00E1\u0093\u009D,\u00F4\u009Dy\x12*\\\u00B8,U8\b\x19\x0EB\u0086\u0083\u0090\u00E1 d8\b\x19\x0E=57\u00F5\x12z\u00AA\u0096z\t\"\f\x03\x11\u0086\u0081\b\u00C3@\u0084a \u00C20\x10a\x18\u00880\fD\x18\x06\"\f\x03\x11\u0086\u00C1\u008By\x13(\u00A8\x01,\u0096\u00BF6\x0F\u00FB\u00FE\u00BBF\u00A5_\x7F\u00DC\x1D\u00AA\u00F9\u00A0\u00A0\u008AX,\u009F3\u0089\u00DE\u00BF;C\u00A0\u0099\\\x19d\u00DF)\x1D\u00FC6\u00B0\u00CAxG\u00B0r\u009C}\u00AEe\u00D90O\u00C9#Wzs\u00A4\u00CB\u00E6{\u00FEbf\u00BE\u00EC\x06\u00BD3\u00A2>I\u00EE\u00BFDo\u00DE\u00DF;\u00D6\u00E4l-\x11\u0082sV\u0081jmoa\u00B7#\u008C6\b\u009C\u00BA\u00BF-\x0Ec\x18\u00E8L\x18\u00FF\u00E4\u00A0gb\u0089\u009E\u0080\u00CFP\x18\u00FB\u00D7\u00C7\u00F8\u00D7\u00AC\u00B4\u00A5\u0088\u00A8m\u00B5\u00B8\x10\u00EFn\nc\u00FE\u0092\u00A4\u009B\u00A4\u00AF\u00BCn-\u008C\u0081\u00D3!L\u00B4\x0B-i\u00BB\x14m[\u00ED&=\x17\u008DW\u00B5\u00EE\u00FD\u00F8\u00ED\t\u00B3\u00FC\u00F6\u00B2\u00B1$j\u00EE\u00BA\f\u00BA,\u00EB\u00FD\u00CDt\u00EEy\x14\u00D7/\u00A8\u009F\u00D8\u00CA\u00D2\u0085\u0092\u00BA\x00\b\u00E5\u00943\u00A9vK\u00A9v$\u008C>T\u00AB\u00CD\u00A0\u00DE\u00C1\u00DA\u00AC-'K\u00C1*\u00C6\u00DD<\u00BD\u00D1^\u0093t\n\x13\u00B5dFO\x10\u00DB-\u00A8\u00D6\u00910\u00BA\u00C5\u00FB\u00BCuk!L$\u0099\u00DB|\u0097\u00FA\x1DC\u00A0y\u00EDp\u00E8\u00F7g\u0081g\u00FD\u0093\u0082Z-\u008Eu0\u009B\x0EY\u00F6\u00E6\x1A\u0080\u00D0!\t\x02}\n\u00E0\u0096\u00F78\u00EAY\u00EA\u00F3\u00D9\u00A7[Sv\x01\u00AB\x07\u00B7y\u008F\u00CC>%\u00D0\u00B4)O\x1A2+\u00FFd\u00FFZp8#\u00E7t\u00FD<\\l\u00BAN8\u00FC\u00E1r\u0099?\u00F0\u00E8\u00B5\u0095~\u00F5\u00DD\u00C0m\u00AC\x1D\x18\u00C6\u00D5\u00CF_\u00C2\u009B\u00CBy+p\u00F7\u00A19\x1E\u009F\x01>\u00BE\u00B6\u0085#?=D\u00FF\u00A3\u00A3Y9\u0088\u0095\u0080\u0081\u00AC\u0095\x18\u00880\fD\x18\x06\"\f\x03\x11\u0086\u0081\b\u00C3@\u0084a \u00C20\x10a\x18\u00880\fD\x18\x06\"\u008C\x0B\x00\u00FE\x07J\u00E1I;\\\u009A\x7F\u00A3\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var bordmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x06\x00\x00\x01\x06)\u00D2\x12\x00\x00\x00\tpHYs\x00\x00\x02\u0095\x00\x00\x02\u0095\x01?\u00E3*L\x00\x00\x05lIDATx\u009C\u00ED[Oh\\E\x18\u00FF\u00C6?\u0098@\u0095\x04\u00A1\u00C6X5.\u00FEi\x11a\u00CD\u00D6\u00A0\u0082\u00B0\u0085\x1C<\x04\x03B\u00F4\u00D0\b\x01e\r\u00A8 z\bx\u00B0\u00B9\u00A4\x14zh!\x1E\x1A\u00BDD\u008A\bI\u00C1\u00D0\u00EAi\u008BF(xI\u008CBB\u00EAa\u00ED\x1E\u008CM\u0088f\x03\u00B1l\u0092V>\u0099\u00D9\u0099\u00B7\u00B3\u00B3\u00F3\u00ED{\u009B\u00BE\u00D4w\u00F8~\u008Fa\u00DE\u009B?\u00DF\u00FB\u00E67\u00FF\u00DF7O \"\u0084\u00E1\u00AE\u00D0\x14\u00F1'\x12 \u00B2\u00DA\u00C7\x1A\u00F7\u00D7\u00C3e\u0095J*n;@\u00E8\u00D5~\n\u00FA\x17P\u00DE\u00DF\u00E1\u00D2%\u0097\u00CCg\u00C0&qD\u00FAP!wH\u00A5R\u008A?-\u00D9\u0084vC\u00AA!\u00D4\u00B8$\u0092\x19\u00DB\u00DB\u00FE?A\u00B2n@7t*CP_:m\u009D \u00D5+\x1E\u00D8\u00AC\u00C9\u00A0\u00DD\u0094\u00AC\u00F0\u00BA\x17|\u00FFDA|6Z}vzR\u00DA\u00ED]\u0094\u0083\u00C5\u00CCd\u00D3\u008D$\n\u0092Wk\u00B1\x14-\x16mX\u00C8~\x0B\x11\u00D7\x1F[\x17o\u00CD\u00A2\u00E9;\x14\x04\u0088\u009C\u009C\u00A9\u00EC\u008EY-\u00CE\u00C2\u00CB-x>+\u00A0\u00DA!S\u00DA\u009F\u00B3\u009Fe<\x02\u00CEz5\u0081\u00AF\u0087\x0F\u0098[\u0094\u00A38\u0080\u00D4\u00E8]\x00\u00C8\u00E8\u00E0\t\x1D^\u008F\u00A0G\x17\u009F\u00DA\u0082\u009F_*\u00EB\u00DE\u009D\u00D3\u00FE\u0080\u0099/\u00B5\u00DF\u00AE\u00FD\u00AC\u009C\n\u00AA\u00A3\u0081=48\u00DD\u009D\x1C\x16\x10\u00BAb\x1F\x16\u00B8\u00D9\u00EF\u0093\u0090\u00D8\x06\u00ED8\x10\u00DBx\u00CD\u00CA\u00EC'X\x19\n\u00A42b\u00B6oW\u009C<kV{\u0099\u00B0\u00C9\u0085\u0094SY\u00C1\u00A7\u00F4}V\u00BC7\u0083b\u00F5\u00D1\u00AB\u00DE\u00C4\u00DE\u00D1y\u00B1\u00BB\u00A4V\u00FB+\u008F\x1F\u00D7\u00A3\u00F5\b\u00A8\u00A8h\u008B>k\u0094O\u00C9|fJQa\u00BF\u00F6l\u00D9\u00D3\u0087\u00ED\u00EA\u0098\x11K\u0099\x12\u00BC>\u00DF\x06\x13}7\u00B1\u00B3\u00F8\u0095\u00A7\u00A4f\tk\u00F6-y\u00CF\x1EF\u0085!\u00E0\u00EF\u00F5\u00A5\x17\x1FC\u00CFl\u00DD\u00BA9\u009C\x19\u00BD\x046\u00CC\x00\u00C2\u0086aH?\u00A3\x15>b\u00C5\r8\u00F19W\u00B6\u009FI_\u00E0\u00F5Cg\u00952\u0083?4]5!\u00D5\u00A6fx\x18;\u00E3\u0095\u00CB\u00D3\x01\x05V\u0086\x02+C\u0081{\x13\x05V\u0086\x02+C\u0081\u0095\u00A1\u00C0\u00CAP`e($_\x19q5}E\u00EDo\u0096\u008ENBu\u00EF3\u00D0\u00ACp\u00FD\u00A1.\u00D8o\u0089o\u0086P\\\x1A\u00DC\x11 \u00DA\u00BC\x19\u00BC\x0B\u00E7\u00A3%T\x0Bg\u00FD\x15L\u00AF\u00F0\u00F3{X\u0080\u00A3\u00BD\u00DF\u0082\u00F1\x13\u00A8\u00F7c\x7FG\u00DF\x1D\u00C8\f\u00E3'\u00D0\x11\u009A\u00B7M8\u00F6\u00F7='\u00AC\u009DT\x06\u00A1\u00ADR\u00C8\u00EER\u00B4M\u009C\u00B6\u00D4\u00C1\u00B1K\u009BNT/\x00lX\x1B5\u00E9\x17\u00ECg}/\u00D3l\u00F8\f \bX\u00919\u00FFJ[\u00F0\u009EF\u00D5\u00A44?v\r\u00A1p\u00F8\u009CS\u00C29@\u0098\u00B0X\u00B27sf\u00937g\u0085\u009Dr\u0099Qq\u00BF=w\u008Bb\u00A7\u00BE\x01\x7F0\n\u00B0\u00D2\x05\u00D0Rv\x1Bl\u0089j\u00A8D\x1A\x7F\u00FA\u00E1\u008Bw\u00CB\u00ED-<\u00F4gK(3\x01;\x17\u008F\u00EF\u00B8u\u00AF\u00AF\u0082\u00B5\u00A1G\u0087\u00A1\u00BC'=\u00D6\u00C9&\u00DA\f\u00AD\u008C\u00ECQ\u00B5U%\u00F7\u00CF\x19\u00A7\u00B1\u00E6\u00AC\u00FB\u0094\u00D3xs\u00F2\u00D9n\u00E4\u00B0\u00D6\u00B9\u00D3\u00BC2\u00A6\x0BF\u00FC\u00C0\x1D\u00B9\u00AB\u0087\u00C8\u00A53.f&\u00A1p\u00B8/Ve\u00A4L\u0084,\x15\u00CF[\x15\n\u00AC\f\x05V\u0086\x02+C\u0081\u0095\u00A1\u00C0\u00CAPH\u00D4\u00DC\u0094$$\u00AA\u0096\u0092\x04&\u0086\x00\x13C\u0080\u0089!\u00C0\u00C4\x10`b\b01\x04\u0098\x18\x02L\f\x01&\u0086\x00\x13C\u00E0\u009Ef3\b\x10iX\u00CA|\u00A8\x1EZo\\\u00C0\u00D4\u00F2\u00B7wF\u00D5\u00E6 @t\u00C1RfTezv~\x06\x01g\u009A\x12\x10\u00FDKi\u00F7\u00E9\u00E0\u00D3\u00AD>\u0082e\x7F\u00C2\u00B5L\x06{\u00B2\x00\u00ED\u00E9\u00EB-q\u00AE\f\u00CD\u0091.[\u00DF\u00B13M}\u00CA\u008E\u00DE\u0095\x0El\r\u00C3x\u00A5\x02\u00D4\x0F'\x1F}\u00B2\r\u00AD7\u00B6\u00F7\u00A9\u00C2\u00E3\u00C1\x1B_\u00EC\u00C2\u0091_*\u00A2\u00BE\u0094\u008D\x1C\u00FB\u00A3\u00CA\u008DN\u00CC?\u00F7\u00DF\n\u00EE?}\x7F\x17\u009E\u00FF\u00E9\b\u00A6\u0096\u0087\u0089\u00D4\x19\u00E7\u00BF\u00B6\u009C\u0089\u00D0\x07C\x0BN|\u00DE\u008A\x1F\u00B1\u00F3Y\u00C7#S\u00DA\u00E5-\u00CB\x1A\t\u00F9\u00C3\x01\x1E\\\u00B9\x0F\u00C6\u00DEv\u00ADv\u00D1\x10\u00DA\\\u00D7;\u00CA\u00AAI\u00F6/``\u00EA\u00F1\x188\u009D\u00AE$\u00AF^m\u008B2\u00D7)\u00DB\x1A\u00A7\u00ADw9s$\u00D3\u00CA\u00E3\u00CA1\u0097\x1D>\x17\u00D6\u0095\x02\u00BD\u008AO\x16\u0095%Q\u00EA.\u00CB \u00CB\u00B2\u00DEQ\u00BE\u00FD\u00AE\u00B4\u00D6\u00B9\u00AD\u00BA\u00D0r\x1A\u00E0\u0091\"\u00C0\u00E9\u00C1\u009B\u00B0\u00DD:\x1D\u0092\u00EB2\x02^\u0096\u00BE\u00DD\u008A\u00B4\u008D\u00D5`\x1A\x01?\u0097\u00BE\x15\u00E6Z\x1E\u00A5\x1C\u00A1\u00FF\x18\u00A9\u00C9\x1B\u00B9\u00E67\x1F<\t\u00E7^\u00FBWY\x1Ee\x19dYd\u0099\u00C2\x10a\u0080\u00CB*\u00F7\u00DD\u009B[\u00C1@\u00E61\u00E2\u00F9\x06_m\u00DF\rj\u00D4m1:M\u00A3\x16\u0093\u00B7\u00E4OY\u00E1S\u0091[\u008Cl\u00F1Fo\u00D9Z\x10\u0086\x1A\u0099\u00DB\u00AA\u00EF\u008B>+\u0095j^\u00A0\u00CFo[\u008A\u00BB\u00A7\u008FkL\u00BB!\u00E9\n\u00D6\u00AF@\u00E4\u00ECf\u008C\u00E7\u00D6\u00B5\u00D1\u0088\x18u\u009C@\u009F\tod\u0095\u00BD=b\u00D6:W\u0083\u00C3\x19\u009E\u00E9:i\u00AEn\u00BAnp\u00F8\u00C3\u00E7\"/\u00F0\u00F0\u00E0J\u00878\u009F\u00BE\x02\u00AB\u0087z`\u00FA\u009D{\u00D5x\u0093tH\x1D{g\x00^\u00BD\u00B0\x0B/\u00FCx\r:\u00FEx1\u00AA\u00C6l% \u00C0{%\x02L\f\x01&\u0086\x00\x13C\u0080\u0089!\u00C0\u00C4\x10`b\b01\x04\u0098\x18\x02L\f\x01&\u0086\x00\x13\u00E3\x03\x00\u00FC\x07c\u00C4\u00AE>/\u008D\rx\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var fspmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x06\x00\x00\x01\x06)\u00D2\x12\x00\x00\x00\tpHYs\x00\x00\x02\u0095\x00\x00\x02\u0095\x01?\u00E3*L\x00\x00\x05\x06IDATx\u009C\u00ED[_h\x1CE\x1C\u00FEFT\u00AA\u0096\u009A\nJ\x15\u00A5ijl\u00A2\u0085\u0086\\^Z,\u00C4z\u0088\u00D0B@,>\u00A8/>\\\u00A0\u00D27!\u00F5\u00C5\u00F6\u00A5\u00A5\u00A0b!\b\u00CD\u0093y)H^\x14T|H\u00B1E\u00DB'S\x13\u00E8\u0085\x04\u00CB\u009D)\u00B4*\u00B6\u00F4l\u00EB\x19\u00FF\u00C1\u00C8\u00CC\u00CD\u00EC\u00CD\u00CD\u00CDow\u00CDn\u00E2)\u00BFoYvfv\u00E6\u00B7\u00DF~\u00F3o\u00E7\u00CF\n)%\u0092pGb\u008C\u00D5\u0089$\u00E6\x0B5\x01!\u00ED\x19\u00B6\u00B4\u00FE\u00D6M\t)\x00\u008C\x02\u00A8\u008Aj\u00FF\u00C9\u00C8\u00C0\u00DA\u00BE]g\u008B\t1l\u0084\x1C\u00D3\u00D7mh\u0092U\u00C45\u00F9/\u009F\u00AF[\u00B7\u00F6?!\u00A5uw\u00A2\u0098\u00B9=\u00ED\u00DF5$\x16\x07\u00CE\u00D9\u00FC\u00F0\x0B\u00BA\x0E\u009B\x1F\u009A\x14{\u0096\u00DA\u00F5p\u00F3J\u00EBu\u00E8\x03\t\u0089.\u00ED\u0096(A\u00A2\x02\u00A9\u008Fi\u00E8(\u00ADy\x1A\u00A5\u00F3\x03t`\u00B90\x19\n\u00D7\u00F7*}\u00FBB\u00E1\u00FF\u00E3\\\u00CB\u00E5\u00D5ra\u00C3F\u00D6\u00CA\u0088[)U\u00C3I\u00DD'\u008D\b\u0088\x01\u00EF~{\u0097\u00F6\u00E1\u00AE\u00DFT\u00EB\u00DC\x12\u00AB\u00A5\u00B2-=\u00BEdkmT\u008BetLh\u00FF\u00F5\u0087\u00EA\x18?,ck\u00B5c\u00A4\u00C7\\\x0B\u00C6LQ\u00FB\u0087j\u00C9M\x03$\u00BA\u00A9f\u0081j6\u00B8\u00EEt\u00B2\u0091\u00DC\x1A\u00ED<\u0090[{\u00CDdV\x13L\u0086B\u00BA\u00AF\u00DB\u00D9]\u00CB\u00E2\u00D5\u00B3-\u00D5N@\u0094\x04DObZ\u00F55\u00F8\u00E6\u00A4\x14\u00D5\u00FE/\x12\x1F\x14\u00D7R\u00BB}\x0B\u00BE\u00DE\u00FD\u0096\u00D3\u00C2\u00AB\u00A3\u00E4\u00F87z=@\u00AB\x7F\u00FC\u00B0\f}U\u00A6\u00FA\u00CAl#rz\u00C4\u00EB\u00C4\x1Ad 1e\u00DC\x13N\u00F8\u008C\u00F2\u00DBN\u00D1v?x\u00E6\u00BBDB\u00C9\u00CAT\u00FA\u00AEhB\x12\u00C3\x012\u00D3N\x0F\u00EC\u00BA\u00D5q#We\u00EC\u00F7\u00B6&\u0093\u00CAX\u0083\u0094\u00DF)\u00EB\u00F4g\u00F6\u00FE\u0091\u0094\u009E\u00BB\x03\nL\u0086\x02\u0093\u00A1\u00C0\u00B5\u0089\x02\u0093\u00A1\u00C0d(0\x19\nL\u0086\x02\u0093\u00A1\u00F0\u00DF\"#\u00AEn9\u00A5\u00C7=\u0097{\u0097\u00A20\u0088\u009E\u00D0\u00C4\\0\u00FD\u00B1\x13R\\\u00D8\u00FDg*6\u0089\x1F\u00D9#\u00B3\u00FAc\\\r[\u00CCG\u00F7\u0098\u00FD\u00FEOJ\u00AB\u00E3\u00BFr\u00A6\u0091\u00FE\u00D2\u0093\x17\u00B3\u008F\x0E\u0094\u00A1\u00A3\u00EF5\u00C7@\x1E\x11;\u00DFG\u00A6\u00BF\u00BA\u00F9e\u00F7e\u00E2\u00CE\u00D8l\u008A\u00A617\u00FC\x1C\u00BAg\u00A7<+-\x0BQ\u00CD\u00B3\u00A0#>r\u00F9\u00BC\u00BE\u00FE\u00B2\u00E1\u00FE\u00C0\u00F4i\u00FAl\u00B2\u00E3%\u0094\x07?\t)c\u00DC\x153\x0B:\u00E6\u0085G\u00E3'5fJ\u00A3N|\x01>x\u00A4q\u00BD\u00B7\u00FE,\x11\u00E3\x10\x005\u00F8\u009F\t\u00DC\u00ABF\u00AE\u00D1O\u00EFB\u00F1\u00E3\u00D8G%*\x13\u00A9\u00E3L\x18\x07\u0094\u00B1\u0087-\u00D87\u00BC25\u00ACm,\u00EC\u00B8\u0096\u00A9\u00CCD\x18?\x02\u00F1\u00E3c\u008B\u00C6\u00FB\x00\u0080\u00AD\u008E{\u00D4,\u00F2Fj\u00B5\u00F8gw~\u00AE\u00AF\u00F7\u00D4\u00EB\u00D9\u0095I\u0099\u00DFn\u0099\tV\u00EDk\u009B\x0Ed\u00AE\u00DA:Ry\u00F0m|\u00BB\u00FD\u008D4q\u00DB\u00D3\x16&!1\u0090&.\x0FU(0\x19\nL\u0086\x02\u0093\u00A1\u00C0d(0\x19\n\x1D\u00D57u\x12:*\u0097:\t,\f\x01\x16\u0086\x00\x0BC\u0080\u0085!\u00C0\u00C2\x10`a\b\u00B00\x04X\x18\x02,\f\x01\x16\u0086\u00C0\u009Dy\x19\x12\x10\u00DD\u0098\x1F|\x1D\x10\x0F\u00E2\u00EE\u00DF\u00CB\u00B2\u00F7\u00E2;y\u0093\r>\u00B7\u00DA\u00BF\x0F\u00CB\u00F7\u00BD\u00A8=O]8!!\u00E7r1\u00BC\u0092\x19\u00D4\u0096\u00D9T\u00B5\r\u00CBN\x0F\u00DB30M\u00EClV\u00B3G)\u00EB\u00B3\u00A3\u00D9\\;\u00BDl\u00B6s\u00ADtf\u00F8\x1FOC\u00C7\x1A\u00B0\u00BB\u00F7\u00EC\u00F9\u00D9K\u00B7\u00F1\u00C3\u00A3\u008B\u009E(\u00EEF\u00B9\u00A9<\x04q2\u00E6$\u00BE\u00D9\u00B9\u00ACv\u00B0\u00C7e\u00CC\u00DA\x0Bcw\x11\u009A\u00E5\x16w7\u00A1l_j\u0091\u00DE2\u00CCD\u00E0^\u00C9]k4[ cK\u009A^\u00AA1;\x11\u00D3.\u00D9\u00AC\u009A0\u00BA\u00A4(2\x07>j\x12\u00AAn\u00FB\u00D5\u00FE\u00B6\u00E4\u0090\u00F6\u00ABP\u00C5\u00BC\u00AC\x1B\u00AE\u00DC\u00FB\u008D EO\x18i\u00C2*\u008E\u00FFx\x1B\x1F\u00F5\u00E3\u0084\u00E5\u00A1\u00AA\u0096\u00E2\u0096\u00A1\u00E4\u00E4W\u0085N\u008F\u00B4,]\u00C6\u0094\u009A\u0092\t\u00DBO\u0094&\u00BF\u00C4L\x07J\u00D7t\u00DB3T[\u00A3\u00DA\x17\u00B3\u00996k\u0095\u00CAP\u00D40\u00A0\u008Bpy\u00B0\x16W\u0095b\u0084)F\x7F\u00B84\u00FFx\u00F1W7]af|\x1B\u008E\u00FD.\u00DD\u00CE4\u00D7\u0096k\u009A[\u00CA%\u00B6\u00D0\u00B9\u00E2\u00EE\u00DAv\u008Bb}\u00EFM\x00]:\u00F0V\x17pi\u00FB\x10zq6\u0085\t\u00B5q\u00A2(\u00E0.\u00AC\u00EA\u00B5\u00E6!\x00%'\u00AC\u00E8\u00FD\u0096\u00B8UBV\u00DDD\u00F8~\u00F3^\u009C\x7Fn]\u00E4o\u00FC\u0096\u009B\u0086\x03\u008D\u00CC\u008D\u00D4\u00C2\u008Es\u00D1F\u008D\u009Cz\u0085P\u0089!\u00E3\u00FA\u00DD\u00B5\u00AAJ)6|\u00ACZ\u0089\u00B1\u0090}sO\u008B\u00F7\u00B7\u009C\u00C2O\x0F\u00BF\u0080\u00A9\u00D2:\\\u00E9\u00CEjR\u00A1\u00E6\u00B8\u00AB1\u00F1\x1A\u00E8\u009Fk\u00EC\x13y\u00ED\u00DD\u00BF\u00B0\u00F1\u00FAW\u00B2gaOV\x02\u00BCJ@\u0080\u00C7J\x04X\x18\x02,\f\x01\x16\u0086\x00\x0BC\u0080\u0085!\u00C0\u00C2\x10`a\b\u00B00\x04X\x18\x02,\f\x01\x16&\x04\x00\x7F\x03\u00A2\u00B6>\u00EA\n\u00AF\x11`\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var bemg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x06\x00\x00\x01\x06)\u00D2\x12\x00\x00\x00\tpHYs\x00\x00\x02\u0095\x00\x00\x02\u0095\x01?\u00E3*L\x00\x00\x04\u00B7IDATx\u009C\u00ED[Qh\x1CE\x18\u00FEF\u00C5\u00A6\u00A8\u00D0\u0094\u008A\x05\u00AD\u00B9\u0096\u00A4^\u00AB\x0FG\u00AE(>h#\u00E4AA\u00A8\b\u00F1\u00A5\n>\x1D\u00D2*\u00F5AH}I\u00FBR\x10\u00F4\u00AD/\u00C9\u0093WA\x11\x1Fl! \u0085\x14\x1A\u00F4Ek\u00B0\x0F\u00BD\u00AA\x18/^hj\x0B\u0095\\i\t\u00C9A\u00E1\u0097\u0099\u009B\u00D9\u009B\u00BB\u00DB?\u00BB\u00DB\u00EE\u00A6\u00A7\u00FC\u00DF2\u00B7{\u00B3\u00FF\u00FE\u00F3\u00EF7;3\u00FB\u00CF?\u00AB\u0088\bQx R\";!\x055\u00A2\u00A0\u00C8\u00A4wf)T\b_\x1E>K \x05\u00E0-\u00BC0\u00DB\u00BAxc\u00EF\u00AE\u00A7\u00C9T\x0B{\u0096,\u0091\u00CB\u00BC\u00A6\x07\u00EF\u00DC\x01\u00B0\u0095@[Uc\u00F3\u009A/\u00D4\u008Bd\u00A6V\u00DA\u00FDW\u00A4.\u00EF+\u00ABg`\x1E\u00F4\u00F6\u00FCb]\u00FD\u00F0\u00DAJ\u00A8&\u00CDQg\u00C2\u00D1\u00CF\t\u0084\x02\u00F4ok\u009B1\u00E7^\u00F9\u008BB\u00AF\t\u00CB4'*\u00C5rW^5?\u00C9\u00C9\u00FF\u008Fk-\u0095[K\u00C5\x1AQ\u00B2\u0091Jl\u00A3\x1C\x0F\u00CB\u008F\u00A5DA\x15\u00BCc\u00ADl\u0097\u00DD\u008F\u00E3\u00C9\u009A\x19\u00E2\u00A2-Y\x1C<\u00E3\x0E\u00EDP\u00E7,*\u009A!\u00EF\u00C2\u00FE\u00F3]\u00D7\u0084\u00B6\u00E8\u00DDD\u00CD&\u008F\u0092\u00DD\u008F\u00F9\u00F9\u00B1\u00BA\x06\x10r\u00A1\u00F9W\x07\x0Ef\u00D6-\u00C8c\u009F\u0091\u0092\u00D4:\u00ED4\u0090Z\x7F-\u00C6d\t1\u0086C\"c\u00D4\u009F\u00CF6\u00B4[\u00A3\u00A0\u008Aa\u0083L\u009B\u00EC\u00E2\u00EE\u00DB\u00EA\u008B\x0F\u00C9\x1FO\"\u00C1\u00BD\u00A8u\u00F5\u00DC\u00B5\u00C1\u009A\x1E\x02P\x19\u009E\x06a\x1C&;\u00E2\x1A-\x7F\u00F2X\u00A4\\\u00E4[f\u00A8!\u00A7\u008E\u00B8q*0\u00C6\u00BE\u00CC~c\u00F73\u00EE\u00E5\u00D6\u009C\u00BB\u00B1}5\u0089Aw\u00C1L\u00B1\u00EC\u008C\x01a\u00B9\u00C3(\u00B7Me\u00C6\u008C-\u00AC\u0080}u\u00E2F\u00EB.\u00F9\u00CAp\u00DD\x18S\x1B\u00AC\u00C5-C\u0086\x03\x0Eb\f\x071\u0086\u0083\u00B4&\x0Eb\f\x071\u0086\u0083\x18\u00C3A\u008C\u00E1 \u00C6p\u00F8o\x1A\u00A3\u00E6^\u009EP\x1F\u0097I-\x0E\u00D5\u00B4\u00CF\u00A4\u00A0\u00C6\u00D6\u0095\u00D7\u00FE\u00D5\u00CDm\u00B7\x12Y\x13\u00FB\u0085\u00FC\u00D0ir/\u00D8\u00CE-\u0089\u00F4\u0099tbf\u00D0\u00C2R\u00FCj:\u00F7\x06\u00F0\u00FC,h`>\x17\u00DC=T\x7F\x1B\x1B\u00FE\u00FF\u00D9\u00A7\u00FF\u00B1G9\u00C4D\u00BC\u00E0\u008D\u009B\u00D2\u00F4\u0082q\x00F\x01,\u00BB\x00\u0087\u00DD\x07\u00FF\u00B1\u00F2\u00D8u\u00B3_\u00DAyTAm\u0089eN\u00AC*r\u0094_{\u00EAw\u00CFa\u009B\u00D3\u00CEZ\u0087'Y\u00F2\u009C\u00BA\u009C\t\u00A44\u00ABj$\u00BDj\u00FA\u00E0xs\x7Fm\u00C7\u0080\u0097[\x0F\u0091\u00D4\x0F\u00F59sty\u00F80\u00BE}\u00B7umZ\u00CC\x04\u00EC\x1C:\x1D\u00E6\u00CAVA\u00D8\u00E5\u00E7\u00B4\u00B9\u00C3\u00D5\u00FC\u00EB\u00E9\u00BB\u00B7\u00D6\u00B5\u00F5\u00AAj\f\u0084b\u0087\x0B\u00AC\u00AB\u00A9\u009F\\\u00AC+A\x15%3f~o#\u0089\u00EFld\x0F\\\u008C\u00ED\u00F4'2\u0086\u009A\u00CE\u00FC\u00A7\u00F8\u00E3\u00B9\u008F\u00E2\u00C9\u009A\u00D9\u008A-I\u00F4\u008B\u00AB\u00C2A\u008C\u00E1 \u00C6p\x10c8\u00881\x1C\u00C4\x18\x0E=56\u00F5\x12z\u00AA\u0096z\tB\f\x03!\u0086\u0081\x10\u00C3@\u0088a \u00C40\x10b\x18\b1\f\u0084\x18\x06B\f\x03!\u0086\u00C1CY)VP93\x19\r\u00F58\x1EnTh\u00E8\u00D2g\u00A9\u00E8]\u00D83\u0089\u00D5G\u00FA\u00F0\u00C4\u00D5\x0B\u00D8v\u00FD+\x02\u00DDLCo\x17\u0092\u00CC\u0086\u00C6\u009B\u00BEE\x01\u00BF\u00BC\u00B8\x1A\u0084\x18Z\u0091\u00A0qo\u00E2|\u00DD\u0088P\u00C4\u008Co=\u00D0{\u00E0b\u00A2e\\IR\u00FAMI/W/}\u00D7\x17\u00FC\u009Fx\u00BF\u0081Mkk\u00EB^\u0093\x04\u0083\u00BFn\u00C6\u009B\u00E5\u00E6\x05\u00BF\x15\u0080\u00E9\u0083\x03a\u00EB\u00E8\u00EF\x15\u00D9\u00F41\u00B7lpk\u00F4\fP\u00F8\u00F1k\u00DA~%\u00DF!Q\f\u00BEyk\u00A6\u0092;a?\x1E\u0098\u00EB8?\u00E5\u00CE\u00D3\u00A6\u00D5>\u00BCwb\u00B1M\u00DBB\u00FE\u00D1\u00D4\u00EF!\u00B5&\u00A4\u009B\u00CB\u00C9c\x14\x04Ru\u00D2M\u008AP o\u00FD\u00A7\u00B7\u008D\u00DA\u00D8\u0094\u00DB>\u00E9\u0090\u0099s\u0091<\u00F7?(\u00AB\u009A\u009F\fBF:\u00D4\u00A4\u00CB\u00FDi\x7F\u00A2\u00F0Q\u00AA\x11\u009DHb\u00FC~\u00E5\u00D4\u0091 .\x16B\u00CC\u008C\u00CD\u009B\u00F2\u00F3,\x19\u00EC\u00E6\u00E9\u00CA\u0099\x05\u00B4\u008E\x1C\u00BB~\u00B57\u0089i~\u00DC6\u0082j~)\u00CCX\u0086\x18\u009F\u0088R'QV\u00A6\u00DF\u009E\x1B\r\u00CA\u009A\u00DF{I\x7F4g\u00CAx\u00FB<\u00E1\u00CA\u00CE\u00B3\u00A6\u00EC\u0084\u00A1\u00B5\r!&\u00F4\u00C9\u00D1FW\u0086\u00A7\u00A9\x15M\r\u00DBL\u00A8\u00D7#\u0098\u0093\u009B\nd\u00FE\u00DEq#\u00AB'%;btP\u00D4\u00EFg\x12\u00AE\u008C\u008E\u00D6\u00EF\r\u00D7:}\u00FF\u00EAJ\u0092\u0085\x1E\u00F7\u008D\x18\u00A3\u00F4\u00E7\u0097&L\u00C8[\u00F7\x01\u00FA\u00A9I\u0093\u0098\u00DA\u00D0m\u00A3S\u00F7a\u00FA\u00C9\u00B1\u009D{\u00DAI\u00A2\x04\f\u00C4Wb \u00C40\x10b\x18\b1\f\u0084\x18\x06B\f\x03!\u0086\u0081\x10\u00C3@\u0088a \u00C40\x10b\x18\b1a\x00\u00F0/u\r!\u00ECA.\u0099\u00A1\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var movemg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00F\x00\x00\x00F\b\x06\x00\x00\x01\x06)\u00D2\x12\x00\x00\x00\tpHYs\x00\x00\x02\u0095\x00\x00\x02\u0095\x01?\u00E3*L\x00\x00\x05$IDATx\u009C\u00ED[Oh\\E\x18\u00FFFC\u00B5\x17\u00C9\u00B6X\u00A3\u00B2%\u00AE\u00B4\th\u00A1v\u00DB\u0088\u0087\u00D2\u0088{\u00C8Ah\x0F\x16/\x15\x02\u00C2\"\u0088\u00E8\u00A1\u0090\u009B\r\u0082\u0092c\u00A1\x1E\u00BA\u009E\"x\u008A\x05\u008B\x7F@\u00D8\u0082i\x0F\"\u00B8\u00B5\r$\u00D8*kRJS5\u00EDnhHCK\u00E1\u0093\u0099\u009Dy\u00F9vv\u00BE\u00DD\u00B7\u00DB\u0097\u00B8\u00CA\u00F7{<\u00DE\u009By3\u00DF\u00FC\u00DE\u00EF\u00CD\u009F\u009D\u00F9f\x15\"B+<\u00D22E\u00A2\u0089\u00C0pB\x18\x06\u00AC;\u00F2&\u00B4\u00B0k\u00A5\u00F6\x1C\u00D1%\u00CC\u00D8k>\u00BA?|\t\u00F5u\u0093\u00DF\u00AE\x1B\u00C54\u0089\u00D4\x00\u00A0\x02\x15\u0091\u00D3\u00F7\u00F6\x1C\u00D6\u00E1\x1E\u0092a\u009B\u00BBA@\u00A5@\u00A5\x10\u00B0j2u\u00A1\u0098\u0089\u0095\u00F6\u00EF\x19\u00D2\u00DF&nF?mdH\u00DDzz\r\u009EX\u00A6\x1F6\u00AF@\x15\u00A1\u00F6\u00B1\u00C7l\\\u00CE^\u008B0\u00BD\u00F3\u0096\u00FAt|\u00DD\u0098kM\u00B6%\u00ED\u00A5\u00E1f'\u00CCf'\u00E9\u00F3\u00FF\u00F1WK\u00E4\u00D5\x12a#F6\u00DA\u0088Z\u00EC\u00BF\u00AD\u00DE\u009A\u008E\u00F5\u00BDu'\u00AA\x0E,7\u00B6%\u00F8\u00FC}\u00B4\u00ED\u0089;\u008A\u00EE\u00B9\u00B9\u00EEFty\u00D75)\x1Eqw\u009F\x05\n\u00D7q9\u00DB\u00D2\u00CF5<\u008D\u0098\u00CC\u00EE\u00AB\u00C2\x1F\x03w\x01!\u00A5\u00C7H7N2c\u00E80eR\u00DF5x\u00CD\u009D;\x01\u00A1?\u00F1nA\u00AA\u00FD\x06\x19I\u00AC\u00D3N\x02\u0089\u00F5\u00D7Bf#!d8\u00B0d\u00D47\u00C7\u00EE\u00A9ON&\u00DA\u00D4\u00CC\u00E0\u00F3\u00EEYT\x7F\u00A6\u00AF\x04\x13\u0084zh3\x1C\u00ECF\u0084\u0099\u00A1\u0083d\bH\x05\u00D3zC\x05\u0093&\u00CA\x0B\x17FV\u00E9\u00F0Q\u009F\u008E#ru\u00CF\x032R\x16\u00C8h\u0099\u00B7\u00D7b4J\u00D6\u00C2c\u00DE\u0088Zvi\\\x1E\u0093\u00F6\u00F2\u00CByxu\x1EC\u0084\u009A*\u00D3\u0082L\u0086\x16MT@B\u00B2!\r\u00B5\x1D\u0093Lv\u00D2\u00A8s\u00EC\u0087`\u00A6NO7\u00C2\u00C3\u00A9\x13A\u00BB2\x1Cp\x102\x1C\u0084\f\x07iM\x1C\u0084\f\x07!\u00C3A\u00C8p\x102\x1C\u0084\f\u0087\u00EE'\u00A3\u00E75f~3\u00B7\x7F2\u00C9\u00C2\u00D4W\u00A3h\u00E6c\u00A0zc\u0093\u0081C\u00D7\x07\u00E0\u00DC\u0091\u00E0\u00A3\u0087\u00C2\u008D~\u0080\u00E3_l\u0081\u009B\u00E9\u00DF\u0083f\u0082\u00B3\x03\u00FD\x0B\u00FE\u00C2\u00C8jh\"\x16g\u00D2\u00D6l\u00E9\u00CE\u00D8\u009E\u00DDW\r=oPF\u0081\x1A57\u00DB\u00FE\u00BEO|\r\u00FAGO\u00C5^\u00CB\n\u00D4\x14\u00F1M\u00E8\u00B3\u00A4@\u0095\u009DS\u00CA\u00C6M(P\x15\u0092f\f\x01\x17\u008C\u00EDk\u00BBz\u009C\u00B3\u00AA\u00A92\u0086\u00B9\u009E\u00F1\u00FD\u00F6\u00E2q7K$\u009337)s3\u00C51r\u009F\u00A5W\u0092\u00A7X7\u0089\u00BB\u00BA\u00E7\x01\u00A7Nc\u009Dyo\u00BC\u00F6m\u009F\u00BC\u00F9a\u008C\u00EAQ\u00B5\u00A7.\u00EB\u00A2\u008D+yirv\u009D\u00F7K\x13z\u00E7\u00EBGah\x1A\u00E0\u00A9\u00C5\u00C7\u00E3\u00D7\x19=\rm\u00AD\u008C;*tj\x0B\bS^\u00D8L\u0091\u00A9\u00ED\u00F8\u00D3[\u009Da\x7F\x15\u00A1<x\u009A,@GWR\u0099\u008F\x02B\u00AE\u00D9\u00AA\u0084Ms\u00D4\u00DC\u00FF\u00F5\u00CC\u00BD\u00F6\u00C9\u009C:\u0081\u00B5L\u00D9X\x0B\u00DC\u00B1[\u0093\u00B3[\x1E<\x1D\u009BL4\u00F9/\x0F\u00BE\u009E(\x19m\u00B3\u0089sO\u00A6*\x1C\u0084\f\x07!\u00C3A\u00C8p\x102\x1C\u0084\f\u0087\u00AE\x1A\u009B\u00BA\t]\u00F5\u0095\u00BA\t\"\f\x03\x11\u0086\u0081\b\u00C3@\u0084a \u00C20\x10a\x18\u00880\fD\x18\x06\"\f\x03\x11\u0086AO\u00BB\x19\x14\u00A8\u00BD0\u0097\u00FD\u00C0\x04\u00B6\u00AE\u009E\u00C1\u00CC\u00AF\u00DFn\x0E\u00D5\u00F6\u00A0@\u00F5\u00C3\\v\u00DCdz\u00E1\u00E2I\x04\u00BC\u00DC\u0096\u0081\u00B6VJ\u00DD\u00D2\u00AD\u00DD\u0082\u0095\u00F4\u00D2p\u00A2+\u00BBzK\x17\u00E5\u00AB\u00EF\u00DB\u00E0\u00DB\u00860v\u00C7\u009E[\u00BC\u00FF\u00E5\u00955nm\u00BBk\u0084\u00D1\x0E\u0081\u00C3\u0097\u00D6\u00C5a\x1C\x03\u00A1\u00B3\u00B3>f\u00F2\u00B5e|\u00E9\u00C7\u00AD\u0090\u00B92O\u00BCY\x05\u00CF\x036\u00E1\u00C5i\u00CFW\x06j\u00D5<\u00EB\u00BCc\u00E4,:\u00F3^|\n\u00EA\u00FF\u00E5\u00A3\u00CF\u00B2\u008D\u00CBXO\x1BM_\u0080\u009A\u008Fi\x1Aw\u00DCx\f>~{\u00B9\u00A3wl\u00A9\u00FCR\u00DF\u009A\u00A9\u0086Ny][\u00AA\u00DB\u00EF\u00D8\u00AF\u00E2\u00EF\u00DF\u009C\n\u00EC\u00E7,\u0091\u00B0\u00F6KMxa\u00BD\x1D\u00B3B\u00E2r^\u009A\u0090\u00AF*\u00E3\u0095]\"\u00DB:M8\u00E2\u00BF\u0098^r{G\u00CD;\u00E8wY\u00EA[{\u00E8\u00A6T\u00D7\u0084t\x01\u00DA\u00A5x\u00ED\u00F9\u008F\x02\u00C2\x14\u0098\x17\u00A0\u0084\u008B\u009EPy\u009B\u00A7\x10\u00B0S&q\u00B4\u009C\t\u00FB\u00BC\u00E4\u0095UwD\u00FC\u00F5\u00A6Z\u00CD\u00D9\u0089\x13\u00B3I\u00C5k\u00AB\b\u00A3\u00FA\x7F3\u00BE\u00E1\x0E\u0085\u00A9\u00AB16O]\u008D\u00B1q\u00B9\u00C0\x0BW\b\u00AFB\u00C0N\u00CA\u0096\x179&\u00F5_S#\u00DE\u00DF\u00BD\u00B9b\u00DFgxc:_\u00BD\u00CFzf\u00E8`'\u00C2\u00E0\u00BA\u00C7\u00D4?\u00CA\x01\u00CF\u00AA\u00DF4}Ol\u00C8\x0E\u00E5\u00D2\x0B3C+\u009Dt\u00BE\u00F1\u0085\u00A9n\u00BF\x13\x15\u00F0_\x1C\u00AEu\u00DF\u00B8\u0098^\u008A\u009B?\u00FE\x0F\u00BC\u00DE\u00DB;\u00E1|\u00FA'\u00F8\u00F9\u00D0s\u00F0\u00FD\x1B[\u00E0\u00D9\u0085\u008E:\u00FBM\u0085\u00E6\u0098;\x0B0r\u00E6>\x1C8?\u008F}\u00D7\x07\u00E3\x16/^\x02\x062Wb \u00C20\x10a\x18\u00880\fD\x18\x06\"\f\x03\x11\u0086\u0081\b\u00C3@\u0084a \u00C20\x10a\x18\u00880!\x00\u00C0?\u00BE\u00AC\u00D63\u00B1)t\r\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var fsmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x05\u00B6IDATx\x01\u00ED]=\u008F\u00DBF\x10\u009DM\u0097\u00CAag\u00D8\u00AET\u00E4\x10 Is\u0081]\u00C9\u0095R9\u0080\u00D3\u00C8MR\u00ABpm\u0080\u00DD\u00D5g\u00C0\x7F@\u00FE\t*\u009DRE\x02\u00A4I`\x05\u00B6S&8\u00D7v\f\u00C8@\x04\x18\u00D05\x1B\f\u00B5K\r\u0097K\u008A\u00A4t\u00C2\u0084~\u008F H\u00ED\x07\u0097o\x1Fw\u0097\u00CB\u00D1\u0090\u00C6ZKm\u00F1I\u00EB\x1C}\u00CEd\u00FE\u00B9\u00B9\u00CE\u00B6d\u00ACX\u0097\u0086\u00CC\u00CC\u0090I9,\u008B?\u00A1MUs\u0095g\u00D5\u00FE\u00EC\u0087\u00B5\u00DF\u00DF\u00B5B'\u0087\u00D6\x15\u00D1\u00BA\u0094>d\u00D8\\_\u009F\u00F3EE\x0B\u00B2\u00F9\u00B2\u00CC\u00C2-\u00A5y\u00C8\u00AB\u00DB\u00C3l\u00CD\"^\u00DD\x1E\u00EE\u00BA\x10\u00F9\u00A0\u009D.\u00C8>Tk\u00A7V\u00D8\x16\u009D\u009A\x05\n9^!\u00DC\u00E1\u00FB\u00CE\u00DC\u0090\u0099\u00C72\x182\x13\u00B1\u009FF\u00D3\u009C\u00905\x7F\u00DE\x19\u00E6\x01y\x1B\u00E3\x06\u00C9\u008D\u00D7\u00B5G\u00B24\x10\u008D8[|Cv\u00DB\u00B1k\u00D4\u00BC\u009D\u00B84\u0089;\u00D6\u00CA\u00B7\u00D9\u00CE\x03I[\u00E0\x12\u00D6W\b\u0084G!(\x04\u0085\\e!\u00D9\u0088\u00B6\u00B8{\u00E6\u00A7<!\u00C2\u00F0X:\u00F3\u00D3\u008Fk\u00F3\u00FD\u00CBb\u00B8\u00BC\u00FB\u00A4\u00D7'\x1F\u00DC\u00A8g\u00DD\u00A8w.~\u00CB\u00D1\u0091\u0097\u00A9\u00DB\u00CE9\u009D\u00BB\x1D\u009Ef\u00F1\u00DF\u00BC\u00B7t\u00FFE>2n\x0B\u00B9\u00FF\u00C2r\u00A4<\u0088\u00DBO\u00C4\x01}\u00FCi04\u008F\\\u009A\u00D3\u00FC\u0084\u00DF\u00DEX\u0097\n\u00F1\x055\u009D\x00V\u00DE\u008F?\x1F\u009E\u00C9\x020\u00C6\u00A3\x10\x14\u00F2\u00B1\x15r\u0094\x16\x7F\f\x1C\u00A5\u00B6@\u00A4\x05@D\x1B@D\x1B@D\x1B>\x0E\"\u00D9\u0093\u00C8\u00C5\u00DD\u00B3\u00FC7\u0099\u00893A\r\u00F6-\u0098\u008Fa\u00C8,\x1A\u00A7\u00FF\u00E5\u00BB\u00CB\u00C2\u00D3\u00CC\x10\u00D1\u00D9\u00CB\u00DB\x1B\u00EBl\u008A\u00B4y\u00DA\u00B9rS\u00AAE0\u00C5\u009A\u00F9\u00B9\u009E\u0098\u0092\u008D\u00DC\u0096\u009Fx.\u00DD\u00FEr;\u00CD\u00CA\u009F\u0082.\u00C4\u00FETL\u00D3\u00A6n:\u00B7\u00F4\u00E5\u00E4O^y^\u00C8\u00E7\u00C3\u00D3\u00C0\u0088E\u00A4\u00F8\u00833pB\u00CE\u00C0\x19\u00DF]\x7FXL\u009C-\x03OJ\u0084\u0095NJ\u00C6\x05\u00F9\u00FD\u0092\x06\u00E9\n\u00FB2,\u00CF\u00FF\u00FA\u00E4C^\u00C1\u00C141\u00AEHHh\u00FB\f:#\x12\u009C\u00D4\"2\u00D3\u00F6'U\u00AC\u00D9m\u009E\u00B90@\u00CD\u0083\u0093\x1F\u008B\u00FD\u0089|~\x1D#PKD\x12\u00DAw\u0092}\u00A8\u0095\u00FE\u00FA\u00F2Q\u00DD\u00B1p\x1B\u00AF\r \u00A2\r \u00A2\r \u00A2\r \u00A2\r\x18\u00D9\u00B5\x01D\u00B4\x01D\u00B4\x01D\u00B4\x01D\u00B4\x01D\u00B4\x01D\u00B4\x01D\u00B4\x01D\u00B4\x01D\u00B4\u00A1\u00FFD\u00D8^\u00C7v\u00BBB\u00D8\u00C6u\u00ED O+\u00D8~h\u00C8\u009C6J\u00CB\u00FF\x1Bu\u00AEt\u0095\u00D8i\u00B1r.u\u00C2\u00B24j\u00F4/JaZ\u00AB\u0088\u00E7e\u00D6\u00E8\u00DF\u0098;\u00ACUQ\u008B\u00D5\x0E\u00B3\u009B7d&n\u00FF\"0r\u00CE\u0084oWnf\x13'\u00EF\r\u00A4\u00FE\u00BF\u00AA\u00A94\u00BA\x05F\u00D6\u00918\u00A7v\u00A6\u00B7*\x12\x11\"6pLK\u0083\u00B0$$\"\u00AD\u00C0\u0082\u00C84\u00B0!\u00A6\"\u00BC\u00B1!\u00B4LD\u009A\u00A5\u00DD\u00DF\u008DC\"b\x7F\"N\"\u00B4\u00D0\x0Edzy\u00A9\x05\u008AL\x05i\x0E\u0093\u0095S$\u00F2\u00EE\u00FA\u00C3:\x13uY\u00A2\u0088\u008D\u00BD\u0082\u00C8\u00B9\u00B8T\u009A\x10\x19\u0089\u00F8\u0085 \u0092[p\u00A5\x12\x05\u00B3v[;{\x1D\u0099\u0080\u00884!'\x15D\x06A\u009E9\u0095+C\x12)\u00D9\u00D9\u009B\u0092\u00A8$R \u00F3|x\u00D6\u00A4\u0097\u00BA\u00CA\u0095{\u00CE:\x12\u00B5Dl\x03\u00DB\u00F6Q\u00C9\u00EC\u00B0\u00F9\u00E3i\u00BC6\u0080\u00886\u0080\u00886\u0080\u00886\u0080\u00886\u0080\u00886\u0080\u00886\u0080\u00886\u0080\u00886\u0080\u00886\u00F4f\u00CE\u00DE\x17\u00F4\u00E6\u00CA\u00EA\x0B \u00882@\x10e\u0080 \u00CA\x00A\u0094\x01\u0082(\x03\x04Q\x06\b\u00A2\f\x10D\x19 \u00882@\x10e\u0080 \u00CA\x00A\u0094\x01\u0082(\x03\x04Q\x06\b\u00A2\f\x10D\x19 \u00882@\x10e\u00E8,H\u00E68\u00F6\u00F7W\u008Fv\u00A6#\u0093\x1C\u00E2e\u0094\u00FF\x17p\u009D\u00D4\u00BE\x04s\x17\u00BAx:dn$\u00C2\x01.t'\t|b\n\u00AFW<\u0088\u00B7\u00C5\u00D6\u00CF&\u00FF\u00EEA\u008B\u00BC\u00D2\u00CFf~\u00B0sbG<\u00AE\x0B\u00EF\u009B\u00C3u\u00D4\u00E1M\u0090\u00DD\u0085\u00F0\u00EB\u00C6\x0FnU\u00E1\x0Bg\u009Bz(\u00EEQ\u00A9\u00AD\u0085v\u009E[\u0087\u00BB@6\x1F\u0099[\u00E5\u00CER~\u00ED \u00CCA\u0085\u0088\u0088\x11z|-+\u00E2\u00FD\u00ABh\u00D3\u00AA\u00FC1\u00AF\u00B1J\u009F\u00BEx\x0B\u00F5.t\u00B2\u008C\u00D0\u00E1Q.\u00DEQ\u00F2\u00A2\"\u00BE\u00D42\x0F!L7!\u00D8\x1B3xUn\u008D(\u00FE\u00AD\u00B3\u0092\u00F8\u00C4\x06\u00EF\n\x16_A\u00CB+\u00AB\u00E6X\u00B5]aP\u0096\x7Fcm\x12\x11}Z%b\u00E48\u00D3\u00E0Kn\u008BJ\u00FE\u00EC\u00E4\u00C9u\u00D4A\u0098\u00CAA\u00DD~\u00FD\u00FB\u00AF\u00F4\u00E6\u00D6\u0088\u009E\u00DE\u00BB\u00A4/^n#\u00FE\u00FD\u008C\u00E8\u00C1o\u009F\u00D2\u00EA\u00DA\u0093\u00BD\x06\u00AF+\u0084%\u00FB-\x11=&\u00A2\u00F7D4\"\u00A2s\"Z\u00D6|\x7F\u008F\u00C3g\u00EE\u00E7cK\u00D6D\u0092\u008D\u0089\u00E8B\u00FC\u00FE#z,\u00AE\u0093\u00D5\u00B5'Y\x1Dq]yp\x1Dr]\u00BE\u00B95\u00CA\u00EA\u00B6\n\u008D\u00FB\u00C8\u00EE\u00DD\u0096\u00BF\u00AAK\u00DF\t\u008Ct\x0FM[H\u00A9\u009B\u00A9i!r\u0099\u00B6\u00E8\u00B2l\u00E4\x03JrI\u00AFb\x1Ci?x\u00C5\u0084\t\u00EE\u00B4\u00DC]\u00D0\u00C0W`\u00A4K\u00F1\x1Fg,\u00F7\u00C3[\u00AF\u00E4d\u00D7\u00B1\u00DC\u00AB\u00CF\u00C7>m\x10\u0097\u00F8\u00C1;,G\u0096!\u008F\x1F\u00ACI\u00C59\u008FKe\u00C9;\u00AC=\x06\u00F4\u00D6\u0082\u0094\u0084\u00F9\u00F9\u00DE\u00A5\x06\x0Fj-k&\f\u00D7I\u00C7[^\u00DB'\x07\u00E9\u00BE\x00\u008FN\u0094\x01\u0082(\x03\x04Q\x06\b\u00A2\f\x10D\x19 \u00882@\x10e\u0080 \u00CA\x00A\u0094\x01\u0082(\x03\x04Q\x06\b\u00A2\f\x10D\x19 \u00882@\x10e\u0080 \u00CA\x00A\u0094\x01\u0082(\x03\x04Q\x06\b\u00A2\tD\u00F4\x1F\\\x1C%\u00EE\x13d\x13>\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var fcmg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x05\u0086IDATx\x01\u00ED]1o\x1B7\x14~,2\x17R\u00C6dp\u00A1\u00C1]j\u00C3@\u00D2t\u0092\u0081\x02\u009E\u009B.\u00DA;\u00E5\x17\x18P\u00B3\u00B8\u0085'\u00EF\x1D\nM\u0099\u00BA\u00A8@\u0097\u008E\u00EE\u00D45\x02\u00D2d\u00AB\x03\x05]b \x01l\x07\u00D9\f8`\u00F1h\u00F2\u00CC\u00A3\u00C8\x13)\u00C9\u00EE\u00EB\u00E5\u00FB\x0E\u0082\u00EFx<>\u00BE\u00F7\x1D\u008F\u00F7\u00EE\u00DD;+\u00AD5\u0095\u00E2\u0093\u00E2#Zz\x10\x19\u00EB\u00ADkM\u009A&\u00A4\u00AF\x16S~\u00B95$M\x07f\u00ED\u00F5\u00DA\u00C9e\u00B965\u00B2\u00FE\u00D2\u00FD3\u00D3\x18x\u00B2(6D\u00B1\u00946\x1C@\u00F4\u00B4\u00BFG\u009A:\u00FEII\u009A\x0E\u00BD\u00F5au\u008E\u00AD\u00BB\u0095\u0087\u00CFt\u00EE\u0089\u00F9Q\u00F2\u00B0\u00D0(,\u00C5bW\"\b\u00B9\x11!j\u00B2\u00BD\u00A7>'s\x16(R\u0087aEEj\x18k V\u00AEHm\u00B9\u00B6\fj\x03\u00B2\u009A-\u00A8\x17\fb\u00EDf\x18\u00BB\x7Fj\u00CBN\u00EDl3\u00B2\u00E5\u00DDj\u00FD\u00FB'z\u00A9\u0089\u00A4\x148\u0085\u00E5\t\x01\u00F1\x10\x02!\x10r]B\u00D4\u0097\u00EF\u00B4z{\u00F7\\\u0091\u008A^gJ\u00CA\u00D5\u00B7\x7Fiu\u00B4yQ\x158W\u0088g\u00B2\u00D0\u00B7\u00F2\u00B6u\u00E0{\u008DC\u00BFl\u00A6\x1E\u00CF\u00B4\x7Fo\\T~\x19op\u00A1\u00D7Hm:\u008D\b\u00D9\u00A9\x1C\u00BC\u0098\x00\u00BE\x07g!O\u00FB{5\u00E7\u00CF\bz\u00FE\u00A0_\u00E2\f\u00A6~\u00F4\u00E6\u00CE\u00B9\x13\u00809\x1EB \u00E4c\x13r##\u00FE&p#\u00D6\u0082\"\x05\u0080\"\u00D2\x00E\u00A4\x01\u008AHC\u00BB\x151O!\u00DF\u00DE=\u00AF\u00B6I=b?J\u0091\u00EA\u00AD\u00BA\x03\u00FC\u00E42\u00E5\u00BB\u00CD\u00D4}\u00F1U\u00BF\u00E6\u00B7\u00F9\u00F0\u00BD\x17\x13\u009E`\x7F\u008E]#~:y\x19\u00AA\u0098\x04\u00AE\u00D3\u00D8\x0FUx\u00EE\x16/\x03?\u00AC\u00E1=\r\u00ED\u00DA'\u00A1\u00DA\u00AE\u00F32\u00B5\u00FB\u0086s\u00DA\u00EEV\u00FB_\u00AF\u009D\u0098\u00BEy\u00FE\u00E1\u0095\f\u00DF\u0085s\u0095\u00EC\u00E3Z\u00AF#\u00DA>\u00BA\u009D\x04\u00FE\u00E2#\u00E7W\u00A6\x1E\u00E9\u00FAu\u0083\u00E3\\\u00FCfh\u00FF&\u00DB\x0E\u00DA\u00EA\x18#s?\u00D9\u00E8\u00A1/\u00DA\u00A4\u0090S$\u00F0\u00B2'\u00BE\u0083\u00EC\u0095\u00F7Be<\u00C6B\u00D6\u00BA\x01#\u00D1\u00B6\u009B\x14\u0098adF\u00A1\x159\u00D8\u00AB\u00FE\u00D1\u00D1\x17\u00BB+\t\u00AAI\x05\u00E6\x11i\u0080\"\u00D2\x00E\u00A4\x01\u008AHCk\x14\u00C1\u00CC.\rPD\x1A\u00A0\u00884@\x11i\u0080\"\u00D2\x00E\u00A4\x01\u008AH\x03\x14\u0091\x06(\"\rPD\x1AZ\x1EC<\u00DA\u00BC\u00E0x]\u00B5M\u00EA47\u00CEW\n\x1B\u009B\x1C\u00E7\x1Cf\u00DE!\u009Dl\u00EFEw&#V\x0F\u009Fq\u00B4h\u00CB\x0B\u0091\u00EDd\u00BD9\u00E9\u0085\u00D9\n\u00EA\u008F\u00E6\u00D6\u00E372\x13\u00D1\u00AA\u0099\u0088UC\u00D8\u00CD\u00C5\u00F8\u00C2@\u00A6\u008B\u00F3\u008Dm\u00B0\u00D3\x05<O\u0083\u00CE\u00BA\u00D0\u00DC0\x11\u00F0\x1C5\u00B4\u00ED^\u00AC\u00CD\x0B\u00BD\u00A5\u0082\u00A1\u0081\":x#w\x18)\u00AB)\u00E2\u00D5\x19{\u00EB\x07A\u00DCp\u00D4\u00D0\u00B6\x1F\u008BL*\u0093\fK\u0087\u008A4Ed\u0083\u00C8o\u00ED\u00D4r\u0089:v}^T8\u00DAv\u00CD\u00F2\u0089\x10\u00B5\x19\u00EC\u00FA\u00FE\u009F\u00FB\u00F4\u00F37?\u00D0\u00A7\u00EF\u0088~\u00FB\u008E\u00E8\u00F1\u00933E\u00AA\u0093\x18s\u00FC\u00D2\u00C0\u00BD9\u00E3\u00B2\u00EB\u00AD\u00FFA\u0097\u0083z\u0087\u0088\u00CE\u0082z\u00BF\u0096\u00B4\u00AD\u008E?;\u00A1\u00AF\u00FF\u00B9m6~\u00DF\u00FC\u00A0\u00D7_\u00DC\u008A\x0E\u00F6\u00C4\x0B\x03>#\u00F3B\u00CB=7N\"\x03:\fc\u0087\u00E1\u00EDd\u00DBML$\u00C3\u00D3\u00952o\u00EE\u009C\u008B\nK?\x7F\u00D07W\u00D2\u0088\x12QEtC,[\u00822\u00A9}x\x1A/\rPD\x1A\u00A0\u00884@\x11i\u0080\"\u00D2\x00E\u00A4\x01\u008AH\x03\x14\u0091\x06(\"\rPD\x1AZ\u00E3\u00B3\u00B7\x05\u00AD9\u00B3\u00DA\x02\x10\"\f D\x18@\u00880\u0080\x10a\x00!\u00C2\x00B\u0084\x01\u0084\b\x03\b\x11\x06\x10\"\f D\x18@\u00880\u0080\x10a\x00!\u00C2\x00B\u0084\x01\u0084\b\x03\b\x11\x06\x10\"\f D\x18\u008A\bQ/7v\u00FD\u0084\u00B1h\x1DR\u00DD\u00EB\u00F8\b\u00E5\u00FF\x11\u00E6c\u0098/7v\u008B\u00BA\u009E\u0095\u00D9\u00C0\u00E9#\u009Cn\u00C5)$\u009C\u00AE\u00C1\u00C9f^\u00B6C\u0090\u00AF\u00E2\u0096\u00EC$\u00B7F\u00D9W\u00F9/\u009C\x17so\u00E5Y\x1B^\u00DAVN\u00A2]vZ\x0B\u00DB\u0088m\u00C56c\u00DBE\u0092\u00F2\u00B2S^\u00A2D\u00B8\x04 \u0097\u00A0\u00C4IA6}, \"+3\u00B1\u00C0`\u00A3U\u0093|\u009D\u0084\u0098\u00C4-\u00B6\u008D\u00CB\u00C3s\u00BFLb\u0096\"\"BF\u00B5\u00D8}\u00A7\u0089\u00FD\u00C3\u00881\u00B2\u0097\u0084!\u00A6\u0091\x16F\u0085}\x18-\u00D3\u00EFU\x10\u00B30\x11\u0081p\x7Fq_\u009B\u00F5\u00FF]\u00A1\u00FB\x14\u00AE\u009F\u00E19H\x18\u00A3\u00D6V\u00CEe0\u0090u\u0090(\u00CF\u00EA\u00C3\x02\u00C7\x1C\u00C6\u00FA\u00B4(1\u00B5I\u00DD$\u0082\u00BE\u00EF\u00EC\u00D3/\u00DB\x1FL2\u00A8\x03'\u0085\u00FE\u00F4\u00E3m:^\u009B6$\u0086\u00FE\u0097\u00F0\x13N\u00C3$\u00D3\u00EB\u00C6\u00ABT\u00FB\u00C6V\u00C7kSc;\u00B6\u00A1\x03\u00DB\u0096m\u00FC\u00BE\u00B3ol\u009E3\u00A9/q\u00D9r#$\u00FA\u00BF\x01\u00FD\u00B3*s\u0084\x1C\u0086GG\u00CE\u00C2\u0094\u00AC\u0099c\u00E7\u00F5a\u00D1~\u00AFj\x1E\u0099?I\u00C5\u0088qwZ\u009A\u00B6\u00F4\u00D5\u009DP\u00CF\u0091\x11\u00E9\u00E0\u00C0\u00E6q\u00CF\u00DC%\u00B9\u00E3\u00B8\u008D\u00A6\u00B6\u00EC\u00C7\u00B3\x07\u00AE^\u00C3%b\u00C7\u00CA\x1A,\u00DA\u0087%\u008F\u00D9\u00AA\u00EE\u00B0\n'\u00F4,Bf\u0088\tny\u00F1K\u00D8\u00CB\u00DD\u00FA\x16\u00DC\u00F2\u00EA6%H\u00B7\x05xt\"\f D\x18@\u00880\u0080\x10a\x00!\u00C2\x00B\u0084\x01\u0084\b\x03\b\x11\x06\x10\"\f D\x18@\u00880\u0080\x10a\x00!\u00C2\x00B\u0084\x01\u0084\b\x03\b\x11\x06\x10\"\f D\x18@\u00880\u0080\x10I \u00A2\x7F\x01\u00DA\b\u00ABTq6\x112\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var bs1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x04-IDATx\x01\u00ED\u009D?O\u00DB@\x18\u00C6\u00CFU\u00E7Jl\u0088\u00EE\rC\u00E9B\u00D5Na\u00EAV$\u00BA0\u00D1\u0099\u00819\x12[f\u00BE\x02_\u0081\u0091\u008E\f\u00AD\u00D4\u00A9\"\x12m\u00B7\x16\u0091\u009D\"QU\u00A9\u00A8\u00C2r\u00D5\u00EB\u00F8\u00CC\u00D9\u00E7?\u00B1}u\x1E\u00DC\u00E7\x17YI\u00B0\u009D\u00F7\x1E?v\u00CE\u00E77\u00AF\t\u00B4\u00D6\u00AA*\x0F*\u00AF\u00D1\u00D1\u0095\x1E\u00A6\u00FF\x10\u00F4\u0094\u00D6\u00DFT\x10\u00A8`_)5V\u00E3\u00D5?\u00EA\u00F7\u00A3_\u00FA\u00D9\u00A7\u008F\u00F1B\u00B2\u00C9\u00EDI}y\u00D1O\u00BC\x7F\u00A2uz\x19\u00FA\x14QyCT\u008E\u00D2\u00B9\x15\u0082\x1F\u008F\u00A7\u00E1\u00B3\n\u00B6\x03\x15\u00EC\u00AAhGM\u00AC\u00E1\u00EC\u0094\u00C7;S\x15\u00BE\u00D4\u00CE\u00BCZ;d\x176k\u00AD\u00A3\u00B0*\u00B5\x0E\x0B\x06Yl\x109\u00C6\u00ECc*\u00EA\x00\u00EE\u00E6\u00F7\u0094\x0E\u00BE\u00BE\u00EC\x17~H\u00DE\u00B1f:\t\u00E9\x18Lg!\u00C7\u00A6\u00D2j?z\u00BD\x1E-3\u00C9\u00EA<\x1Aw$U\u00E1.\u008C\x17\u0084\u00C63\b\u00830H\u00DBA\u00C2\u009Eo\u00B41\f_\u00AB@\u00CB\x14\u00CF{\u00F7v\x1A\u00BC\u00F9\\\u00FE\u00BDT\u00D83J\u00AF8\u00EE\u00DD\u00C4\u00EF\u00F5\u00DD#\u00FE\u00DB\u00F3\u009FZm\u009D\x15\u00F6\u008C\u00C5A\u00B6\u00CE\u00B4|\u0088\x15\u00E4\u00C8\u0084I4\u00E4reZ;\u0088\t\u0094;\u00EF\u00B4?,\x0B\u00C0>\u009EA\x18\u00E4\x7F\x0B\u00D2\u00CA\x11\u00DF\x06\u00ADl-\n\u00A9\x00\u0085\u00A0A!hP\b\x1A\x14b\x13^\u009D\u008C\u00C6`\u00CE<\x15\u00EC\u00DBc2g\u00FE\u0087\u00CD\u00DB\u00D2+\u0097\u00F3P6j)\x1C\x15]\u00AEL\u00C3\u00E1\u00D5\u00EC\n\u00E8\u00C4\x1DV\u00CD\u00AE\u0086F\u00CF\x1729WOe\f(\u00EB\u00CBP.\u0095r\u00AB\u00D4\u0096Z+I\x03$\u00B04@\x1Ar\u00B5\u00BC\u0097!\u00E2\u00C4\x16\u0092\u00BE\u00CC\u009BXv\u00DC\u00BB\u00897\u00C8\x1CCBoBr\x05Y[4j\u00F4v4\u0099\u00C7(\u00B5\u00FE\u00A4\u00A9\x00/BlA\u00B5\u00D7\u00FD\u00FEt\u00E0\u00A3\r<\u008DG\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083=;\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\x18$\u00FF'y\u00C0\u00DC\u00F9\u00B3\u00DFu\x1Ee\u00CE\x1Bm\fM\x05Rc\u00BCe\u00AC\u008Ew\x12\x19'\u00A5\u00D5\u00A1\u0095\u00A9:t\u00D6\u0095_^z\u00CAV5\u00CAX\x15\u00A5\u00DD\u00AC\u00D4\u00DB(\u00F5\u00BC\x0E\u0095z+\x13\u00A1\u00DD\u008C\u00AE\u00F3\u008B\u00DEx9\x0F\u0089\u00D0\u00FAB\u00EC\u00B4\u00B4\u00F5\x13\u00E4\u00B4\x10K\u00D0\u00A1\u00C9\u00F2:\u00CB]-\u00EF\u00F9HQ\u00D7\u00B7r\u008E\x1C{J\u0088\u00E3\u00C8\u00C2\u00F3\u00ECeb2r\u00EB\u00E6\u00B1\u00F4/D4\x16\u0092\x10s\u00DA\x1FZB.\u008A\u00EA3\u00E3\u00E5\u00A4\u008E\u00D3\u0083\b/Bt\u00C3\\\u00B9\x0F\x11\u009Ayv@(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\u008D\u00CE\u008C\u00D9\u00BBBg\u00F6\u00AC\u00AE@C\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00C0\x18\x12\x16\u0098\u009D\u00AF\rZ\u008F{\u00BE6\u00F0rsK_\u00F8\u00A8nhT\u009D!\u00B5/Rnb\x15\u00CA\u00D9e'\u00D9e!j\u00D7\u00AA\u00A3\u00B1K\u00B6\u009CB\u00BA\u00DC\u00CF\u0090\x02;\u0089ejn\u00A4\r\u009E\u00AA=\x1Am\x0F\x18#\u00CC4\u00AB\u0097\u009B\x14m\x1C\u00AB\x00\u00B0\u0096!al\u0089a\u008A\u00A0\u00CC\x04`\u00CC\u00BD2\"2c\u00C96 \u00AB\u00A8\u00D1z\\\u00DF7c0\u008C\u0090*\u00D0\u008C[\u00EA\u00E6\x18r`m\u00F0W)CNt\u00F2V\u00BC\u0099\u00B7\u00DFu>S\u008A7\u00A5\r\x00\u00C6\u00B4\u00EB~\u0099)\x17\u00AB\u009Bs\x18rmn\u00DC\u00AC\u00AD\x1AM\u00FB+\u00AB\u008A!\x12\x13\u00C5\u008C\u00D6\r\u0099\u00CB\u0098\u0082\u00AF\u00AD\u00E8\u00880\u008F\u0083\fC\u00B4e\u0098s_g\u00A7\r\u0080\u00FD\u00C8B\f)5&\u00E7L+\u00EB?MY\u00F3\u0096\u00A2\u009Bl\u00EF\u00DA\x15\u00CC\u0099q\u00ED3,\u00A0\x0E}\u00E1\u00868\u00C6\u00BC\x7F}[v\u00CA\u00EB5\u00AE\x18#1ANyu\u0097\n\u00A4\u00BB\x02/\u009D\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x10$\u0094R\x7F\x01b\u00F1\u0091\u00BF\u00FE\u00CB\u00CC\u00F2\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var b1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x04\x0EIDATx\u009C\u00ED\u009D?O\u00DB@\x18\u00C6\u00EF\u00BAu\u00A2l\u008827B*]Z\u00B5S\u0098\u00D8@\u00A2K\u00BB\u00D0\u0099\u0081\x19)[>\x01_\u0080~\u0084\u008Etdh\u00A5.\u00AD\u0088\x04\u00EDX\u00D4\u00CCP$\u0090\x1A\t),W\u00BD\u0087\u009D\u009E\x1D\u00FF\u00F7\u00D5y0\u00CF/\u008A\u0092:>\u00BF\u00F7\u00F8\u00B1s>\u00BF\u00BC\u00A96\u00C6\u00A8\u00B2<(\u00DD\u00E2\u00BE4\u00D2\x1Dew\u00A7V\u00FA\u00F6u\u00B8\u00BC\u00A1\x7F\u00BC\u00EAFV\u0092]\u00EE>\u00D5\u00F7\u0097\u00DD\u00C8\u00BF\u009F\x18\x13_\u0087>\x05\u0094\u00DE\x11\u00A5\u00A3\u00B4\u00AE\u0081\u00FE\u00FDx<y\x1F\x1E\u0098\u00C1\u0081:a\u00EA\u00A0<\u00D8\x1A\u00C7\u0097\u00D5: \u00DB\u00B0[+\u009D\u0085e\u00A9tZ0\u00C8l\u0083\u00C89\u00E6\u009ESZ\u00E9\u00FD\u00C8\u00E7\x1De\u00A6\x06\u00828Y\u00E7\u009B\f\x1220\u00B8\u0083\u00852j_\u00D9\u00B7\u0093uFI\u0083G\u00ED\u0081\u00A4,<\u0084\u00F1\u0082\u00D0x\x06a\x10\x06i:\u0088\x1D\u00F9\x06\u00AB}\u00FB>\u00B8\u00FA\u009C|\u00F6\u00F1\u00DDX\u00BF>\u00C9\u00FF^\u00CA\x1C\x19eT\x1Cv\u00AE\u009DQ\u00D1\u00B8\u00A3\u00A2]\u00F6\u00E2\u00CA\u00A8\u00CD\u00E3\u00CC\u00911;\u00C8\u00E6\u00B1\u0091\u008Dd\x06\u0091\u008E\u009C/f^6g\x06\t\x03\u00A5~v\u00D4\u00ED\u00E7\x05\u00E0\x18\u00CF \fr\u00DF\u00824r\u00C67A#{\u008BBJ@!hP\b\x1A\x14\u0082\x06\u0085\u00B8\u00D8\u00BB\u0093\u00C1\x1C,\u00B2\\i\u00A3\u0095\u00FE\u0090\u00D9\u00F6\u00F3\u00C6M\u00EE\u009D\u00CB\"\u00E4\u00CDZ2gE\u00E7\u008Bc;\u00BD\u00BA\u00BD\x03:\u009A\u009EV\u00D9\u00C7 x}\u009Ex\u00F7T\u00E6\u0080\u00D2^\u00A6r\u00B1\u0094[\u00A9\u00BETj$\x1D\u0090\u00C0\u00D2\x01\u00E9\u00C8\u00C5\u00C2N\u00F2\u00C6\u00EDCn\u00EB\x1E\u00C6\u00E7\u0097\u0091\u00F5\u0086\u009D\u00EB\u00C9\x0E)0%\u00F4&$UP<\u0089i\"\u008F\u00F9\u0084\u00F6\u00A3\u00BA\x02\u00BC\bq\x05Un\u00FB\u00F3\u00E9\u00AE\u008F>\u00F02\x1E\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\u008E\u00EChP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\x12\"\u00F9?\u00C9\x03N-W\u00BA\x17\u00FF\u009B\u00CE\u00A9u\x06\u00AB}\u00B7\x02\u00A9\x16\u00DE2V\u00B1\u00EA&eT/3\u00DD&\x7Fy\u00E9)[U+cU \u00ED\u00D6\x0B\x12o\u00BF\u00E4\u0099\u00B2\u008D\u00D9\u00A6\u00DE\u00F2D\u00C4\u0084l\x07\u00AFo\x12\u00B7\u00E5!\x11Z]\u0088\u009B\u0096v\u00FE\x049\u00ED\u00D0\n\u0084\u00F4\x12\u00D7\u00BBX\u00D8\u00F1\u0091\u00A2\u00AEne~\u008E=.\x04/\u00CF^D\u008C\x1CJNrz\u00F0?E\u00D4\x16\x12\x11s\u00D4\u00ED\u0097n{\u00B05\u00F6!\u00C2\u008B\x10S3W\u00EEC\u0084a\u009E\x1D\x10\nA\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\nA\u00A35s\u00F6\u00B6\u00D0\u009A#\u00AB-\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x180\u0086\u00D8\x02\u00B3\u00D3\u0095\u00DD\u00C6\u00E3\u009E\u00AE\u00ECz\u00F9qK_\u00F8\u00A8n\u00A8U\u009D!\u00B5/Rn\u00E2\x14\u00CA\u00E5\u0095\u009D8\u00A5Z\u00F6\u00B7++\u00C5\u0095\x02;\u0089\x15\u00D6\u00DCH\x1F<U{\u00D4\u00DA\x1F0F\u0084\u00CF\u00DBz\u00B9Q\u00D6\u00CE\u00A9k\u0088\u008D-1\u00C2\"\u00A8\u00F0\t`\u00CC\u009D2\"\u00C5\u0090\u00F8\u00E3\u00F2.\x1B\u0083a\u0084T\u0081\u00A6\u00FC\u00A4n\x01C\x0E\u0083e\u0087\u00CE\u00B2\u00C4\"\u00CD\u00D4\u00EDI\u00F1\u00A6\u00F4\x01\u00C0\u0098\u00C6\x06u\u00F3\u00EC\u00DB\x17u\u00B6\u00B4\u00A6\u00DE\u00AF\u00DF\u00A8\u00E5\u0093\x7F\x1F\u00FCy\u00A4\u00D4\u00DB\u00AF\x0F\u00D5hnO\u00FE\x03\u00D4\n\u009B\x1E\u00D6\u00E9\u0097\u008D9\u009A\u00DB\u00B3}\u0090\u00BE\u0084H\x1F\u00A5\u00AFgKk\u00B6\u00EFM\u00D1\u00F4)\u0099{\u00B6\x14\u00F8\u00DAJ\u00F8\u00CA\u00BA\u00CC*\u009AM\u00ED\x03\u00E082\x13Cr\u008D)p\u00A5\x15\x183\x1FT0o'\u00FD\u00B0vj;\u00F7\n\x0Bh@\u009F\u00B9!S\u00C6|Z\u00BF\u00A9Ri]9\u00AE\x18#1A.yM\u009B\n\u00A4\u00DB\x02o\u009D\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x10$\u0094R\x7F\x01\x14\u00D5\u00C7\u00B7\u00D8\u0080\u00D8z\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var ss1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x04\x05IDATx\x01\u00ED\u009D;O\x1BA\x14\u0085g\u00F3\x0F\u00DC!\u00D2\u00C7M\u00A8\x1C%\u0095\u00A9\u00D2\x05\u00894\u00AEH\u00ED\u0082\x1A\u0089\u00CE5\x7F\u0081\u00BF@IJ\x17\u00A1\u00C7\x12I\u00CA \u00E8\t\x12),!\u0099f\u00A2\u00BB\u00EC\u00AC\u00EE>\u00BC\u00CF\u00D1\u00FA\u00B0\u009C\u00CFZ\u00F9\u00B5\u00EB;g\u00CE\u008Egg\u00C7w\x1DXkM]\u00DE\u00D4\u00DE\u00E2\u00B5l\x14\fM\u00A2:\u0083\u00DF\u009F\u00C6\u00B2$V\u0092*\u00D7\u008B\u00F9\u00F5q\u009Cx\u00FE\u00CE\u00DA\u00F4:\u00F4)\u00A2vE\u00D4\u008E\u00D2\u00BB\r\u0082\u00BFoW\u00E1\u00BD\t&\u0081\t\u00CEL\u00CE\u008E\u009A\u00DD)\u00CF\x0FV&|h3\u00EF5\u00DA!\u00FBP\u00AD\u008DZa]\x1A5\x0B\x06\u00D9l\x10ic\u00BAM\x05&\x18$\u00DE\x1F\x1A\u009B\u00E9\b\u00D2\u00ACkk\u00AE\u0093\u0090\u008E\u00C1u\x16\u00AEm\x1Ak&j\u009De^\u00E7\u00D1\u00BA#\u00A9\x0Bwa\u00BC 4\u009EA\x18\u0084A\u00BA\x0E\x12\u00F6|\u008B\u00DDY\u00F8\u00D8\x04\u00C9\u00E1\u00D1\u00F7o\u00AB\u00E0\u00EB\u00CF\u00F2\u00EF\u00A5\u00C2\u009EQz\u00C5\u00DB\u00E1c\u00FC\u00DC\u00C6\u00B7\u00D3\u00F8\u00B5\x0F\u00FF\u00AC\u00D9\u00BF*\u00EC\x19\u008B\u0083\u00EC_Y\u00F9\x10\x15\u00E4\u00CCX3\u00D2\u0087\u00C8aA\u00EE\u00B6W\u008D\u0083\u00B8@k\u00DF\u00BB\x1C\u00CF\u00CA\x02\u00B0\u008Fg\x10\x06ymA:i\u00F1]\u00D0ImQH\r(\x04\r\nA\u0083B\u00D0\u00A0\x10Mxv2\x1A\u0083\u00D5\u00DE\u00F6b\u00EF\u00A9\u00F4\u00CCe\x15\u00CAF-\u0085\u00A3\u00A2\u00BB\u00EDU8\u00BCz>\x03\u00BA\u00CC\x0E\u00AB\u00E2\u00B3\u00A1\u00D3h\u00F4\u00B7\u00C8\u009C=\u00951\u00A0l/C\u00B9\u00D4\u0094[\u00AD\u00B24\u00DAH\n \u0081\u00A5\x00R\u0090\u00FB\u00AD\u00C3\x1C\x11s%$\u00BE\u00E5~\u00DE\u00ED\u00F01\u00AE\u0090\nCBoB\u00D6\nR5\x1A\x15|\u0092\x122Om\u00BFl+\u00C0\u008B\x10-\u00A8\u00F1\u00B6\x7F\u00DE\x1F\u00F9(\x03\x0F\u00E3\u00D1\u00A0\x104(\x04\r\nA\u0083B\u00D0`\u00CF\u008E\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!\u008E0\u008D\u00EDb\u00EF\u00A9\u00D1\u00B6\u008B\u00DD\u0099\u00CB@j\u008D\u00B7\x19\u00AB\u00F3\u0083\u00C4\u008C\u0093\u00FCV\u00B4(\u00DB)\u00FC\u00E5\u00A5\u00A7\u00D9\u00AAV3VE\u00D3nj\u00BAm\x11=~\u0088\u009E\u008F\u00A0\u00A6\u00DE\u00CAD(!\u00C7\u00D1\x0Fm\u00DD\u00E3Qf=\x0F\x13\u00A1\u00CD\u0085\u00E8ii\u00F5\x13\u00E4\u00B4\u0090\u00E8\u00FEXM\u0086f\u0085\u00DCo\x1D\u00FA\u0098\u00A2nne\u00F59\u00F6\u00CF\u00E9]-\u00E1\u00EC&\u00E7\u00D9\u00CB\u00C48\x17\u00AC\u009AoO7|\u009F\"Z\x0BI\u0088\u00B9\x1C\u00CF\u0094\u0090\u009B\u00A2o\u00ACx=\u00C9\u00E3\u00F4 \u00C2\u008B\x10\u00DBr\u00AE\u00DC\u0087\b\u00CByv@(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\u008D\u00DE\u008C\u00D9\u00FBBo\u00F6\u00AC\u00BE@C\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00C0\x18\x12&\u0098]\u00EF\x1Cu\x1E\u00F7z\u00E7\u00C8\u00CB\u00C5-}\u00E1#\u00BB\u00A1Uv\u0086\u00E4\u00BEH\u00BA\u0089J\u0094\u00D3i'\u00F9i!\u00F1E7\u00AD\u00FE;\u00A2Zq%\u00C1Nb\u00B9\u009C\x1B)\u0083\u00A7l\u008FV\u00F5\x01c\u0084[\u009E\u00F3\u00E5\u0096E\u0095#YYE\x17\x0F\u00AD\x14[b\u00B8$(\u00B7\x00\x18\u00F3\u00A2\u008C\u0088\u00CC\x18\u00A4\u00FF\u0092DZ\u0089\u00BE\u00C2\u00AB\u00BAM_\u009A1\x18FH\x16h\u00CE%u\u00D7\x18r\u00A2*\u00DC\u00E52\u00CE\u00D5k\u00F3(MpP\u00B9l\u0092\u00BC)e\x000\u00A6[\u00F7\u00CBL\u00A9 \\\u00E5)\u00DF\u00E4\x18\u00F5\u0090j!\u00F3Je\x021\u00A3sC*\x19S\u00F0\u00B5%-BU\u00F6\u0089z}\u00BE\u00E6+\u00EB\u00B4\u00B0\f\u0080\u00FD\u00C8F\f)5f\u00CD\u0091\u0096J\u0080\u00CFt\u00E6Q\u00DF2\u008D\u0096LNyb]}\u0084\x05\u00D4\u00A1o\u00DC\u0090\u008C1?\u00BE<\u0095\x1D\u00F2z\u008D+\u00C6HL\u0090C^\u00DB\u00A7\x04\u00E9\u00BE\u00C0S'`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\tc\u00CC\x7FM\u00B9\u009C\u00D5g<o+\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var s1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x03\u00B4IDATx\u009C\u00ED\u009D\u00BDN\u00DC@\x14\u0085\u00C7y\u0083t\u0088\u00F4\u00D9&TDI\u00B5T\u00E9\u0082D\u009AT\u00A4\u00DE\u0082z%\u00BA\u00AD\u00F3\n\u00BC\x02%))B\u00CFJ$)\u0083DO\u0090\u0092b%$o3\u00D1\u00F5\u00DA\u00ECx\u00FC3\x1E{\u00F0\x1E\u00CC\u00F9\u00AC\x15?\u00EB\u00F1\u009D\u00E3c\u00EFx|\u00B9&\u00D2Z+_^x\u00B7x.\u008D\u00A2\u0091Jvg\u00A4\u00A2\u00D3\u00E4\u00EB\u00AF\u00F7cy\u00E5V\u0092]n\u00BE\u00D4\u00CFw\u00E3\u00DC\u00CF\u00AF\u00B5\u00B6\u00D7\u00A1O)\u00DE;\u00C2;\u00CA\u00E0\x1AD\x7F^\u00C5\u00F6\n\u00D9\u0081\u00FA@\u00E1\u00A0<;\u008C\u00ED\u00DFu: \u0087\u00B0[[\u009D\u0085\u00BE\u00B4:-\x18d\u00B3A\u00E4\x1C+\u009CS\u00E6\u00FB#\u00A5\x0B\x03\u0081M\u00DD\u00F9&\u0083\u0084\f\f\u00E6`\u00A1\u00B4\u00FAl\u00AD\u00B3(\x1B<:\x0F$\u00BE\u00F0\x10\u00C6\x0BB\u00E3\x19\u0084A\x18\u00A4\u00EF \u00C9\u00C87\u00DF\u009B\u0095\u00BE\u00F7\u00EDK\x1C}\u00FA\u00E1\u00FE\\\u00AA\x1D\x19eT\u00BC\x19\u00DD\x1B\u00A3\u00A2,'\u00B9u\u00DE\u00FE\u00D3\u00EA\u00E0\u00AAvd\u00AC\x0Frp\u00A5e#F\u0090]\u0095|ku\u00E4v\u00BB\u00F6\u00B2\u00B96H\x16\u00A8\u00F2\u00BD\u00CB\u00F1\u00CC\x15\u0080c<\u00830\u00C8s\x0B\u00D2\u00CB\x19\u00DF\x07\u00BD\u00EC-\n\u00F1\u0080B\u00D0\u00A0\x104(\x04\r\n1I\u00EENV\u00CC\u00C1\u009Cm/\u00F6\u0097\u00CE;\u0097Mp\u00CDZjgE\u00B7\u00DBq2\u00BDZ\u00DD\x01]\x14\u00A7Uj\u0092\u00CE\u00FB\u00E6\u0095wOe\x0E(\u00EDe*g\u00A5\u00DC\u00BC\u00FA\u00D2\u00AA\u0091t@\x02K\x07\u00A4#w[G\u00E5\x1B_/\u00B5\u00DB\u00BB\x19\u00DD?\u00EC\u0090\x06S\u00C2`B*\x05\u00D9I\u00CC\u00B5\u0090\u00F3\u008A\u00F6\u008B\u00AE\x02\u0082\b1\x05\u00B5n\u00FB\u00FB\u00CD4D\x1Fx\x19\u008F\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06Gv4(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\n\u00C9H\u00CA\u00D8.\u00F6\u0097\u00AD\u00DA\u00CE\u00F7fe\x15H\u00AD\b\u0096\u00B1rT7\x15\u00DA\u00CA_^\x06\u00CAVu\u00CAX\u00B9\u00D2n\u00AB\u008D\u00AB\u00BFi\u00EAm\u00B7b\x1B\u009BM\u00BD5\x14q\u009A\u008A8\u00AE\x12\u00A2\x03%B\u00DB\x0B1\u00D3\u00D2\u00C6\u009F [B\u008E\u008Ddh\u00B5\u0090\u00BB\u00AD\u00A3\x10)\u00EA\u00F6V\u00BAs\u00EC\x1F\u00F4:\u00B3\u008B\u0099go\"FR\u00D2\u0099\x1F\u008F-\u00A2\u00B3\u0090\u009C\u0098\u00CB\u00F1\u00CC\u00BB\u00ED\u00D9a\x1CBD\x10!\u00BAc\u00AE<\u0084\b\u00CD<; \x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\u00C6`\u00E6\u00ECCa0G\u00D6P\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100`\fI\n\u00CC\u00AEw\u00A6\u00BD\u00C7\u00BD\u00DE\u0099\x06y\u00B8e(BT7t\u00AA\u00CE\u0090\u00DA\x17)71\n\u00E5\u00DA\u0094\u009Dx\u00C7\u0095\x02;\u0089\u0095\u00D5\u00DCH\x1F\x02U{t\u00EA\x17\u008C\x11\u00D9kU/\u00B7x\u00CC\u009D\u0093\u00C4\u0096\x18Y\x11T\u00F6\x020\u00E6I\x1A!\u00FF\u00A8\u00CB|\u00B2\u00AB\u00B1L\u009E\u00BA1\x18FH\x15h\u00C5#u+\f97\u009FP\u009B\x16i\u00BEl\u00DD7)\u00DE\u0094>\x00\x18\u00D3\u00AF\u00FB.S<\u0084+\u00AD\u00BE\x1A\u00B5\u00CB\u00B5\u008F\x0Fv\u00F6\t\u00C4\u008C\u00DE\ridL\u0083\u008F-\u00EB\f1\u0097\x13\u00AF>\x00\u008E#\x1B1\u00C4iL\u0083+-\u00F9\u0088J\x1Fu>\u00A9\u00AB%/mk^a\x01\r\u00E8\x1B7\u00A4`\u00CC\u00F7\u008F\u00CB>.ys\u00C6HL\u0090K^=\u00A4\x02\u00E9\u00A1\u00C0['`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\t\u00A5\u00D4\x7F\x04S\u00D2\x00\u00E5\u00E2!Z\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var is1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x03\u00FDIDATx\u009C\u00ED\u009D\u00BDN\x1BA\x14\u0085g\u00F2\x06t\u0088t\x14q\u008AP%J*S\u00A5\u008B%\u00D2P%5\x05\u00B5%:\u00D7\u00BC\x02\u00AF@\u0099\u0094\x14\u00A1\u00C7\x12I\u00CA \u00D3\x13\u00A4\u00A4\u00B0\u0084d7\x13\u00DD\u00F5\u00CEf\u00F6\u00C7\u00B3\x7F\u00A3\u00F5a9\u009F\u00B5\u00C2\u00C6\u00BB\u00BE{\u00E6\u00ECxv\u00F6\u00FA\u00DA\u00DA\x18\u00A3\u00EA\u00F2\u00AC\u00F6\x16Oe#=PQsj\u00A5W\x7F\x7F\u00BE\x1B\u00CA\u0092ZI\u009A\u00DC]\u00D4\u008F\u00B7\u00C3\u00D4\u00E3\x17\u00C6d\u00D7\u00A1O1\u00B5\x1B\u00A2v\u0094\u00DEm\u00A0\x7F?_$\u00F7\u00ED\u0081\x19\x1F\u00A8\t\u00B9\u0083\u00F2\u00CB\u00A7E\u00F6\x7F\u00AD\x0E\u00C8>4k\u00A3^X\u0097F\u00DD\u0082A6\x1BD\u00FA\u0098\u00DB\u00A7\u00A4\u009F\u00D9\u00BE\u00A6\u00E2\u00FE\u0096\x1B\b\u00B2\u00F8\u00FA\u009B\f\x1220\u00B8\u0083\u00852\u00EA\\Ew\u0093u\u00E6E\u0083G\u00EB\u0081\u00A4.<\u0084\u00F1\u0082\u00D0x\x06a\x10\x06\u00E9:H4\u00F2M\u00F7'\u00C9c\u00A5O\u0092\u00FB_?/\u00F4\u00C7\u00EF\u00E5\u00EFK\u00DE\u0091QF\u00C5\u00DB\u00C1\u00833*\x1E*\u00A3NR\u00EB\u00BC\u00F9k\u00D4\u00C1\u00B5wd\u00F4\x079\u00B86\u00F2\"N\x10\u0093\x0B\";r\u00B7\u00E3=m\u00F6\x06\u00B1\u0081\u00DC \u00A9\u00E7\u00AE\u0086\u0093\u00B2\x00\x1C\u00E3\x19\u0084A\u009EZ\u0090Nz|\x17t\u00D2Z\x14R\x03\nA\u0083B\u00D0\u00A0\x104(\u00C4%\u00BA:\u00E9\u00CC\u00C1r\u00CF+\u00BD\u00AB\u0095\u009E\x16>w9Z\u0096^\u00B9\u00ACB\u00D9\u00AC\u00C5;+\u00BA\u00DBYD\u00D3\u00AB\u00D5\x15\u00D0y\u00F1\u00D4*\u00BA\x1DegM\u00C9\u00D5S\u0099\x03\u00CA\u00F62\u0095\u00CB\u00A4\u00DCj\u00EDK\u00A3\u008Dd\x07$\u00B0\u00EC\u0080\u00EC\u00C8\u00FD\u00F6\u00F1\x1A\x11\x17vnY$$Y\u00EFv\u00F0\u00904H\u0085)a0!k\x05e\u0093\u0098+\x11\u0087\u00EB\u0084\u00D8k\u00D5m\x04\x04\x11\u00E2\nj\u00BC\u00ED\u00AFW\u00E3\x10\u00FB\u00C0\u00D3x4(\x04\r\nA\u0083B\u00D0\u00A0\x1048\u00B2\u00A3A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\u0088%*c\u00BB\x1C-\u00BD\u00EB(=\u00D5J\u00BF\u00CE\u00FD\x7F\u00BA?q+\u0090Z\x11,cUP\u00DD\u00A4\u008C:\u008B\u00B3Vr;O='\u009F\u00BC\f\u0094\u00ADj\u0095\u00B1*K\u00BB9\u00A9\u00B7i\u00D1gT!Ro9\x11\u00B3\u0097\u00A3\u00E2\x17\u00FF\u009F\b\x15w\n\u00D7\t\u0090\bm.\u00C4MK;\x1FA.\x12\u00E2\b*\x16r\u00BF}\x1C\"E\u00DD\u00DC\u00CA\u008A9v\u009F\u0090\u008D\u00E7\u00D9\u00AB\u0088qS\u00D2EBB\u008Ah-$%\u00E6j8\u00C9\b\u0099\u00F9>$`\u00E2:\u00CE\x10\"\u0082\b1-s\u00E5!D\x18\u00E6\u00D9\x01\u00A1\x104(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083B\u00D0\u00A0\x104z3g\u00EF\x0B\u00BD9\u00B2\u00FA\x02\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080\x01cHT`v\u00B37\u00EE<\u00EE\u00CD\u00DE8\u00C8\u0097[\u0086\"DuC\u00AB\u00EA\f\u00A9}\u0091r\x13\u00A7P.[v\u00B2\u00BE<d\u00F5\u00E5\u009B\u00F1m\u00E6\u00DC\u00BF(\u00DDV\n\u00EC$\u0096\u00AD\u00B9\u0091}\bT\u00ED\u00D1\u00AA=`\u008C\u00B0\u00CB\u00AA\u00E8o^\u00A5q\u009C\"@[\u00EC$\x06\x1DU\u008A-1l\x11\u0094]\x00\u008Cy\u0094F\u00C4\u008D\u00BF\u00E5\u00F4\u00883\u00A7\u00B0qmM\u00E0c0\x06\u00C3\b\u00A9\x02]\u00F3\u0095\u00BA\x1ECN\x1D\x03\u00DE71$y-)\u00DE\u0094}\x000\u00A6[\u00F7\u00CBL\u00A9!\\\x19\u00F5\u00C7\u008E\x1D\u00C6\u00A9\u00D3\u00ACk\u0088\u0094\x13\u00A3\u0098\u00D1\u00B9!\u0095\u008C\u00A9\u00F0\u00B6\x15\u00F7\b{;mb\b\u00EA8\u00B2\x11CJ\u008D)9\u00D3\u00B2?\u00F6\u0098\u00FBQ(\u00A3v\u00E3e\u00CB\x1B\u00D7=\u00C3\x02\x1A\u00D07nH\u00CE\u0098o\x1F\u0096UOy\u0083\u00C4\x15c$&\u00C8)\u00AF\u00E9S\u0081t_\u00E0\u00A5\x130h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\u0082\u0084R\u00EA\x1F&\x07\u00B3\u00AF\u00E7\u00BE\u00C2\u00FA\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var i1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x03\u00ACIDATx\u009C\u00ED\u009C1o\u00D3@\x18\u0086\u00EF\u00F8\x07lU\u00D9:\x10\x06:\u0081`J\u00FF\x00\u0091\u00CA^\u00E6\x0E\u009D#e\u00CB\u00FF\u00E0/0\u0096\u0091\u00A1\u00DD\x1B\u00A9\u00C0HE\u00F7\u00D2\u0081!R%g9\u00F4\u00B9\u00B19\u00DB9\u00DBw\u00BE:o\u00DD\u00F7\u0089\u00AC\u00C8\u00B1/\u009F\u00DF{\u00ED~>_\u00BFhc\u008C\u00F2\u00E5\u0099w\u008B\u00A7\u00D2H\u008FT\u00DA\u009DZ\u00E9Y\u00FA\u00FE\u00F3\u00FDX\u0096\u00C2N\u00D2\u00E5\u00F6\u00A2~\u00BC\x1B\x17\u00D6_\x1AS\u00DE\u0087>\u00AD\u00F1\u00EE\b\u00EF(\u0083k\u00A0\u00FF\u00BCH\u00CA;d'jN\u00E5\u00A4<=J\u00CA\u009Fu:!\u0087\u00D0\u00ADAW\u00A1/A\u0097\x05\u0083l7\u0088\\c\u00F65\u0095%\u0080|}\u00A4L%\x11\u0094\u00A9\u00BB\u00DE$IHb\u00B0\u0093\u00852jV\u00DAg\u00B9)ytN$\u00BE\u00F0\x14\u00C6\x0BB\u00E3\x19\u0084A\x18\u00A4\u00EF i\u00E6[\x1C\u00CC\u00F3u\u00A5\u00FFg\u00C9\u00AF\u009F\x12\u00FD\u00F1{\u00F3\u00DF\u00A5\u00DA\u00CC(Y\u00F1ztW\u00F8,}\u00B3\u00D6\u00DF\u00FE5\u00EA\u00F0\u00B263\u00D6\x079\u00BC4\u00F2%\u00B5A\u00E4@nvko\u009Bk\u0083d\u0081\u009C\u00DB.\u00C6\u00F3\u00A6\x00\u00CC\u00F1\f\u00C2 O-H/W|\x1F\u00F4\u00D2[\x14\u00E2\x01\u0085\u00A0A!hP\b\x1A\x14b\u0093>\u009D\u00B4\u00C6`\u0085mJ\u00EFi\u00A5\x17\u00CE\u00B6\u00E7\u0093U\u00E3\u0093\u00CB64\u008DZjGE7\u00BBI:\u00BC\u00BA\x7F\x02\u00BA\u00DC<\u00B4R\u00C7\u00E5!Y\u00E1\u00E9\u00A9\u008C\x01\u00A5\u00BD\f\u00E5JSn^\u00C7\x12\u00D4H\x0E@\x02\u00CB\x01\u00C8\u0081\u00DC\u00EE\u009C\u00B8\x03\u00A8\u0099KH\u00BE\u00CF\u00F5\u00E8.\u00EF\u0090\x16C\u00C2hB\u009C\u00826\u00F4h\u009D\u0090\u00ECYu\x17\x01Q\u0084\u00D8\u0082\u0082\u00DB\u00FEz=\u008Dq\f\u00BC\u008DG\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083\u0099\x1D\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083B\u00D0\u00A0\x104(\x04\r\nA\u0083B2\u00D22\u00B6\u00F3\u00C9\u00CA\u00B9]\u00E9\u0085V\u00FA\u00CD\u00C6m\u008B\u0083\u00F9\u00A6\n\u00A4 \u00A2\u00CDX9\u00AA\u009Bd\u00B6J\x19\u00F5\u00A5\u00F2\u00B9\u00FC\u00E7e\u00A4\u00D9\u00AAN3Vm\u00A6\u00DD,!3\u00C7wlw\u00EA\u00AD\"\u00E2\u00F7\u00AB\u0089;@\u00FA\u00FA\u00EC\u00DC\x1Ea\"4\\\u0088=-]\u00FA\x17do!\u00B7;'1\u00A6\u00A8\u00C3\u00ADl1\u00C7\u00DE$d\u00EB\u00F3\u00EC>b\\Bb\u008A\u00E8,\u00A4 \u00E6b<\u00F7n{z\u0094\u00C4\x10\x11E\u0088\u00E98W\x1EC\u0084\u00E1<; \x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\u00C6`\u00C6\u00ECCa0g\u00D6P\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100`\fI\x0B\u00CC\u00AE\u00F6\u00A7\u00BD\u00C7\u00BD\u00DA\u009FF\u00F9q\u00CBX\u00C4\u00A8n\u00E8T\u009D!\u00B5/Rnb\x15\u00CA\u00F9\u0094\u009DH=\u00CD\u00BA\u00AEF^\u00DFZ\u00B7\u0093\x02;\u0089\u0095\u00D5\u00DC\u00C81D\u00AA\u00F6\u00E8\u00D4\x1F0Fd\u00CB}\u00D1\u00DF\u00D2\u00A7s\u00D6\u00BF\u008Cz\u00EC\x15[bdEP\u00D9\x02`\u00CC\u00A36\u00C2X?\u008A\u00DAT\x0F\u00F8X\u008C\u00C10B\u00AA@k~R\u00F7\u00A1\f\u00C9\u00BFC\u008A7\u00E5\x18\x00\u008C\u00E9\u00D7\u00FD&S\x02\u0084w5D\u00CA\u0089Q\u00CC\u00E8\u00DD\u0090V\u00C6\u00F8\u00E7\u008F CP\u00F3\u00C8V\fi4\u00C6\u00FFNko\u00BD<o\u00B5\u00BF}\u0087\x05\u0094\u00D0\u00B7nH\u00C5\u0098\u00B3\x0F\u00AB\u0090J\u00EB\u00E0\u00B8b\u008C\u00C4\x04\u00B9\u00E55C*\u0090\x1E\n|t\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u0090PJ\u00FD\x03\u00D2i\u00E7\x00\u00B4\u00DE\u0082\u0083\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var us1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x04\x00IDATx\u009C\u00ED\u009D?O\u00DB@\x18\u00C6\u00CF\u00FD\x06l\u0088n\x1D\u009A\u00A5l\x15\u009D\u00C2\u00D4\u00ADHt\u00C9D\u00E7\x0E\u00CC\u0091\u00B2e\u00E6+\u00E4+t\u00A4c\u0087\u00B2\x13\u0089\u00D2\u00B1(\u00EC\x14\u0089\x0E\u0091\u0090\u0092\u00E5\u00AA\u00D7\u00F1\u0099\u00F3\u00F9\u00BF}r\x1E\u00CC\u00F3\u008B\"\u00F2\u00C7\u00CE{\u00CF=\u00B6\u00CF\u00E7\u00977\t\u00B4\u00D6\u00AA.\u00AFj\u00AF\u00F1RV\n\x06*\u00EE\u00CE@\x05:\u00F8\u00FDa(\u00F7\u00C4B\u00D2\u00E5\u00F6]]\x1F\f\x13\u00CF\u00DFj\u00ED.C\u009F\"jwD\u00ED(\u00BD[!\u00F8\u00FBz\u00A56\x1B\u00E4(P\u00C1L9\x1BjHj\u00A3<?Y\u00A9\u00F0\u00A1N\u00BD\u00D7h\u0083\u00ECC\u00B76\u00DA\x0B\u00EB\u00D2h\u00B7`\u0090\u00ED\x06\u0091}\u00CC9\u00F8\u00EF$\u00DE\x1F(\u009D\x1A\b\\\u00F2\u00F653H\u00C8\u00C0`\x06\x0B\u00B3o*\u00AD\u00E6\u00F1\u00E3\u00EB\u0083e\u00D6\u00E0\u00D1z \u00A9\x0B7a\u00BC 4\u009EA\x18\u0084A\u00BA\x0E\x12\u008E|\u00F3\u00C3i\u00F8X\x05\u0089cP\u00F0\u00FD\u00CB*\u00F8\u00FC\u00AB\u00FC\u00B8T82\u00CA\u00A8x;x\u008C\u009F\u00EB\u00A7[\u00FC\u00DA\u00FB\x7FZ\x1D_\x15\u008E\u008C\u00C5A\u008E\u00AF\u00B4|\u0088\x15\u00E4\u009B\t\u0093h\u00C8\u00DD\u00DE\u00AAq\x10\x13(\u00F7\u00BD\u00CB\u00E1\u00B4,\x00\u00C7x\x06a\u0090\u0097\x16\u00A4\u0093=\u00BE\x0B:\u00E9-\n\u00A9\x01\u0085\u00A0A!hP\b\x1A\x14b\x13^\u009D\u008C\u00E6`\u00B5\u00D7\u00BD8Z\u0097^\u00B9\u00ACB\u00D9\u00AC\u00A5pVt\u00B7\u00B7\n\u00A7W\u009B+\u00A0\u00CB\u00F4\u00B4*\u00BE\x1A*\u00B7ItU\u00F4!q\u00F5T\u00E6\u0080\u00B2\u00BEL\u00E5\u009C\u0094[\u00AD\u00B64ZI\x1A \u0081\u00A5\x01\u00D2\u0090\u00FB\u00DD\u00D3\f\x11?\x1C!3w\u008E\x19/{;x\u008C;\u00A4\u00C2\u0094\u00D0\u009B\u0090\\AV\u008FF\u008D\x1EE\u008F\x17\u00D1\u00F3Eb\u00B2\x1C]\u00ABn#\u00C0\u008B\x10[P\u00E3u\u00FF\u00BC\x1B\u00FBh\x03O\u00E3\u00D1\u00A0\x104(\x04\r\nA\u0083B\u00D0\u00E0\u00C8\u008E\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!\u0086\u00B0\u008C\u00ED\u00E2h\u00DDh\u00DD\u00F9\u00E1\u00D4T \u00B5\u00C6[\u00C6\u00EA\u00FC$\u0091q2\u00A9\u00B6\u00DCu\u00E5?/=e\u00ABZe\u00AC\u008A\u00D2nV\u00EAM\u0092\u009F_\u00ED\\\u00A2\u00F3\x19\u00DBM\u00BD\u0095\u0089\u00D0\u00C9L\u00EE$O\u0088\u00F6\u0094\bm.\u00C4NK[\u00FF\u0082\u00EC\n\u0089\u00FE\x16\x0B\u00B9\u00DF=\u00F5\u0091\u00A2nne\u00F5\x1C\u00FB\u00C4r\u00C7\u00DD\u00B4\u00B6\u009Bg/\x13\u00E36:\x12\u00F2\u00E0\u00A4\u00A6\u00BD\u0089h-$!\u00E6r8\u00B5\x1A\u00BE(:b\u00C5\u00CBI\x1D\u00A7\x07\x11^\u0084\u00E8\u0096\u00B9r\x1F\"4\u00F3\u00EC\u0080P\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\u00BD\u0099\u00B3\u00F7\u0085\u00DElY}\u0081\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00801$,0\u00BB\u00D9\x1Fw\x1E\u00F7f\x7F\u00EC\u00E5\u00CB-}\u00E1\u00A3\u00BA\u00A1Uu\u0086\u00D4\u00BEH\u00B9\u0089U(g\u0097\u009Dd\u0097\u0085lj\u00CD\u00EC\u00AF}\u00AC\x1DW\n\u00EC$\u0096\u00A9\u00B9\u00916x\u00AA\u00F6h\u00D5\x1F0F\u0098\u00FB\u00A6^nY\u00D49\u00E67\u00A1\u00AA\u00D4\x07\u00E5\u00C6\u0096\x18\u00A6\b\u00CA\u00DC\x01\u008CyVFDf\u00ECX{\u00C7L'K\u00E8\u00EC\u00D7R?[\u00F2\x1C\u008C\u00C10B\u00AA@3\u00BER7\u00C7\u00903\u00AB\u00B3?\u00B61$\u00FEL)\u00DE\u00946\x00\x18\u00D3\u00AD\u00FBe\u00A6T\x10n\u00EA/\u00A5\u00A4\u00D1z\u00AD\u00B1!a\u009B@\u00CC\u00E8\u00DC\u0090J\u00C6\x14\x1C\u00B6d\u008F\u00B0:\u00FA,\u00C7\u0090\u00D4-\u00B7\r\u0080\u00E3\u00C8V\f)5&\u00E7L+\u00EB\u0097\u00A6\u009C\u00F7G\u00D6\u0097m\u00CBX\u00F3F\u00EE\u00A9\u00E5\u00EC3,\u00A0\x01}\u00EB\u0086\u00A4\u008C\u00F9\u00F9i]v\u00CA\u00EB5\u00AE\x18#1ANyu\u009F\n\u00A4\u00FB\x02/\u009D\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x10$\u0094R\u00FF\x01\u0099^\u009A\u00A6\u00A4\u00B5$|\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var u1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00d\b\x06\x00\x00\x01\x07\u00E5\u00A5\u00C2\x00\x00\x00\tpHYs\x00\x00\x03\u00B0\x00\x00\x03\u00B0\x01'\u00C4\x0F\u00AD\x00\x00\x03\u00ABIDATx\u009C\u00ED\u009D?O\u00DB@\x18\u00C6\u00CF\u00FD\x06\u00DD\x10\u00DD:\u0090\u00A5lU;\u0085/P$\u00BAt\u00A2s\x07\u00E6H\u00D9\u00F2=\u00F8\x1A\u00F0\x01\u00CAN$J\u00C7\"\u00D8)\x12\x1D\"!9\u00CBU\u00EF\u00C5\u00B6.\u00FEw>\u00FB\u00B0\x1F\u00CC\u00F3\u00B3,\x02\u00F1\u00E5\u00BD\u00C7\u008F\u009D\u00F3\u00F9\u00CD\x1B\"\u00AD\u00B5\u00F2\u00E5\u008Dw\u008B\u00D7\u00D2(\u009A(\u00B3;#\x15\u009D\u009A\u009F\u00BF?Oe\u00DD\u00DAHv\u00B9\u00BD\u00AA\u00EBO\u00D3\u00AD\u00DF\u00F7\u00B4\u00CEoC\u009F\x12\u00BCw\u0084w\u0094\u00D15\u0088\u00FE\u00BE\u008B\u00B3\u00C7*\u00DA\x1C\u00A0\u00C9\u0081\u009AQ8(\u00CF\u008E\u00E3\u00FC\u00DF:\x1D\u0090c\u00D8\u00AD\u00AD\u00CEB_Z\u009D\x16\f2l\x109\u00C7\n\u00E7\u0094\u00FD\u00FCD\u00E9\u00C2@\u0090\u00A7\u00EE|\u0093AB\x06\x06{\u00B0PZ-\u0095y\u0098m\u00B3*\x1B<:\x0F$\u00BE\u00F0\x10\u00C6\x0BB\u00E3\x19\u0084A\x18\u00A4\u00EF f\u00E4[\x1E,J\u009F;\u00FF\x1EG_\x7F\u00B9\u00DF\u0097jGF\x19\x15\u00EF&O\u00D6\u00A8\u00A8\u00EDQ\u00D1\u00FC\u00ED\u00E3?\u00AD\u008E\u00AEjG\u00C6\u00FA GWZ^\u00A46\u0088t\u00E4~\u00B7\u00F6\u00B2\u00B96H\x1A\u00A8\u00F2\u00B9\u00CB\u00E9\u00C2\x15\u0080c<\u00830\u00C8k\x0B\u00D2\u00CB\x19\u00DF\x07\u00BD\u00EC-\n\u00F1\u0080B\u00D0\u00A0\x104(\x04\r\n\u00B11w'+\u00E6`\u00CE\u00B6\x17\u0087k\u00E7\u009D\u00CB&\u00B8f-\u00B5\u00B3\u00A2\u00FB\u00DD\u00D8L\u00AF6w@W\u00C5i\u0095Y\u00E6\u00C9\x1D\u00D1\u00C7\u00D2\u00BB\u00A72\x07\u0094\u00F62\u0095\u00CB\u00A5\u00DC\u00BC\u00FA\u00D2\u00AA\u0091t@\x02K\x07\u00A4#\x0F;'\u00E5/n\u0096\u00D3\u00B2\u00F9\u00E5\u00D6vw\u0093\u00A7l\u00874\u0098\x12\x06\x13R)(\u009F\u00C4\u00D4\u00EA6\x11q[&$\u00BDW\u00DDE@\x10!\u00B6\u00A0\u00D6m\u00FF|\u0098\u0085\u00E8\x03/\u00E3\u00D1\u00A0\x104(\x04\r\nA\u0083B\u00D0\u00E0\u00C8\u008E\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!)\u00A6\u008C\u00ED\u00E2p\u00DD\u00AA\u00ED\u00F2`aW u\"X\u00C6\u00CAQ\u00DDTh+\u009F\u00BC\f\u0094\u00AD\u00EA\u0094\u00B1j\u0090v\u00FB\u0091\u00A6\u00DB\u00AA\u00F2\u0087\u0083\u00A7\u00DE\\\"\u0092\u00CE\u00CF]Bt\u00A0Dh{!vZ\u00DA\u00FA\br+!\x0F;'!R\u00D4\u00ED\u00ADt\u00E7\u00D8\u00E7V\u009E\u00BD\u00EA\u00D0\x1A6\u00CF\u00EE!F\u0096\u00C7\u008A\u00D4t0\x11\u009D\u0085l\u0089\u00B9\u009C.\u00BC\u00DB\u009E\x1D\u00C7!D\x04\x11\u00A2;\u00E6\u00CAC\u0088\u00D0\u00CC\u00B3\x03B!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!hP\b\x1A\x14\u0082\x06\u0085\u00A0A!h\u008Cf\u00CE>\x16Fsd\u008D\x05\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\x03\u00C6\x10S`v\u00B3?\u00EB=\u00EE\u00CD\u00FE,\u00C8\u0097[\u0086\"DuC\u00A7\u00EA\f\u00A9}\u0091r\x13\u00ABP\u00AEM\u00D9\u0089w\\)\u00B0\u0093Xi\u00CD\u008D\u00F4!P\u00B5G\u00A7~\u00C1\x18\u0091\u00AE\u009Bz\u00B9\u00D5s\u00EE\x1C\x13[b\u00A4EP\u00E9\n`\u00CC\u008B4\u00C2*\u009D3\u00DF\u00EE\u00AA\u00AD\u00FF RW\x13\u00F8\x12\u008C\u00C10B\u00AA@+\u00BER\u00F79\r\u00C9^O\u008A7\u00A5\x0F\x00\u00C6\u00F4\u00EB\u00BE\u00CB\u0094\u0086\u00C2C\x1Ab\u00FA\x04bF\u00EF\u008642\u00A6\u00C1\u00DBV\u00CE\u0090\u00C2\u00D2\u00B8\x0F\u0080\u00E3\u00C8 \u00868\u008Dix\u00A5\u00A5\u00B4\u00FA&k\u00F2\u00F8\u00AD\u00D2\u00EA\u00BD\u00AC\u00CEv\u00F6\x15\x16\u00D0\u0080>\u00B8!\x05c~~Y\u00F7q\u00C9\u00BBe\u008C\u00C4\x04\u00B9\u00E4\u00D5c*\u0090\x1E\x0B\u00BCu\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u00C0\u00A0!`\u00D0\x100h\b\x184\x04\f\x1A\x02\x06\r\x01\u0083\u0086\u0080AC\u0090PJ\u00FD\x07S5\u00CF\u00D1\u00AD\u009A\ro\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var uu1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0096\x00\x00\x00\u0096\b\x06\x00\x00\x01K\x06At\x00\x00\x00\tpHYs\x00\x00\x05\u0089\x00\x00\x05\u0089\x01mh\u009D\u00FA\x00\x00\x07DIDATx\u009C\u00ED\u009D\u00BFo\x14G\x18\u0086gS \u009BH\u00C4V\x1C\u0081@\u00A4p\x11\x14E\u0089N\x02j(\u00F2/P\x07\u00A5@\u00A9\u00A2t&\u0095]RF\u00A1\u0089\x1B\u00A0v\x11$\u00B74i\u0091\u0088\u0094&\u008A\x12))\u0088\u0094`\u00E4\u00D8H$\u00F8\u008C\u00C0\x13\u00CD\u00B2{7\u00BB\u00DE\u00BD\u009B\u00D7\u00DE\u00CF>\u00C3\u00F3X'\u00FB~x\u00EE\u00DB\u00E7\u00DE\u00BD\u00DB\u00DD\u00B9\u00D9\u00C9\u00BC\u00F7\u00AE+\u00DE\u00EA\u00AC%\x1A\u00A3\u00B1\u0084\u00C6\u00B2\u008BO\u00F2\u00F4f.{\u00F5\u00FB\u00B7O^\u00B4\u00FDSv\u00CE\u00F9\u00CCe\u00B3\u00F9\u00DF\u009B\u00EF=\x1C\u00DC\x11\u00D6\u0080\u00F2\u00E2\u00BC\u00EB9\u00EFf\u00DD\u00D6\u00F4vt[\u00F8Y\u00AA<\u00EE\u00D7\u008F_\u00B8\u00FCO\u00EF\u00DC\x07\u00DE\u0097\u00B7\u00B3:\u00D1\u00D8A4F\u00CEh\u00EC\u00E86\u0096\u00DD\u00BD\u00EA\x07o\u00D9\u00E7\\k\u0092\u00B3\u00C7gV3\u0097\u00F52\u0097-\u00EFz\u00EC\u00E0\u00AD8z\u00FBu\x176}\u00E5m\u00FB\u00E6\u00A2\u00AF\u00DC\x7F\u00FD\u00F6\u00F0\u00EF\u00B5\u00D3\u00AB\u00BCm\u00D3\u00D8A6\u00D6i\u00CE\u00BA\u00A4\u00D3\u00A5\u00A4\u00B0\u00C3\u0084\u00C2T(L\u00A5\u00B1\u00B0rg\u00ACr[\u00F8\u00F4\x1E\u00B1S6\u008E|\x0B\u00A0\x7F|\u00BBh\u00EB\u00FC\u00A0\u00DD\u00BBW\u009B\u00DFH\u00E3\u009D\u00B4r\u00EB\u00C0=?\u00F6,\u00DA\u0091\x1Bn\x01|\u00FF\u0099\u008F\u00B7\x18R/\u00F9\u00CE_\u00B1U\u00E1\u00BC\u00DBp\u00DE-Wv \u00C3sF[\x17\u009Doat\t\u00E1W\u00A10\x15\nS\u00A10\u0095\u0089|\u0083\u009DH[\x14\u0095\nE\u00A5BQ\u00A9PT*\x14\u0095\nE\u00A5BQ\u00A9\x1C\u008D\u00A2\u00E2\u00E3\x03\u0095\u00DB\u00BF\u00BE\u00B3\u00AF\u00AD\u00C1z\u00C7\u00B2\x1Bu,\u00A3r\u00BCa\u00ED\u00F4j\u00BE\u00FF\u00EF\u00DDLq<`a\u00D0Q\u00FC\u00FC\u00D8\u00B3\u00B87B:\u00E6pa\u00D3\u0087\u00E3\x15\u00F1q\u008C\u00B8\x03:\x1C\u0093\u00A8vd\u00D7{\u00AB\u00E3n\u0090\u00B8\u00A8\u0096\x03\x16IEU\x0F\u00AE<\u00A8\x14\u00D5ppew\x03\u00A1\u00B0\u00E1R]\t]\u00EF\u0083\u0086\x1B\n\x1A\x1Cu\u00A9\u00FDn,\u00CC\u00BB^\u00D4\u00EE\u00BC\u00EBO\u00F5\u009B\u008E\u00F6\u00B0\u00E3\u0090\nE\u00A5BQ\u00A9PT*\x14\u0095\nE\u00A5BQ\u00A9PT*\x13Y\u00D4\u00C4v\u00BFM\"\x13{\u008C\x7F\x12A\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K YV\u00B6~\u00EAV\u00F2c]\u00D63\u00AE{\u00F4\u00F3[\u00D5:\u00B6\x1F;t\u00DA\u0087\x0E\u00F6\u00D0m\x1C\u00FA\u00AD\u008B\u00CE\u00FB\u00D6\u00C7\x17\x1D\u00F9M\x1D\u00EF\u00D6\u0097\u0086Z\u00CBn\u00EE\u00E6\u00AE\u00F0\u008D\u00B9\u0087J\u00AD\u008A\u00A4^\u00F5\x1F\u00F3\u009F\u0085\u00FA(\u008B\u00C3\u00906\u00AAV\u00E7\u00DD\u008D\u00A2\u00C6\u00E5\u00E8K\x10~/\u00B5\u008E/\u00A4\u00F8\u00E6E~\u00D9\u0098{X\u0093\u00E5w\rI\t\u00DF\u00C6\b\x05\u0087\u00C7\u0087\x05\x18\u00F3\u00AD\u008Cp^\u0082\u00F2R\\\u00BF\x1C_\u008F\x1F#\u00D5Z\x1D2\u00B3\x10\u00BF\u00B0\u0091\u00B4\x19\u00AD\u00D6\u00D4W\u00EF\u00E9\u0089\u009Dz\u00BAZ\x1F\u00BB5\u00BD\u009D\u00FA\u00D5\u0095\u00C1\u0088\u00E0\u00E1\x02,\u00E5\u00D7\u00EF_\x1A\u00BE\x00\u00E1\u00FA\u00CD\u00C5\u00E4\u00EF\u00E8\u00B8\u00BF\u00CE\u00BE\u00B4\u00A8\u0095\x0E\x0B\x016\x1D\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12\u00E0x\u0096\x00\u00C9\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00E9\u00A3\u00EF\u0085Q\u00EA\u00CA\u00E8w\x0B\u00CCjM\x1A\x1A[\u009C\b>e(m>\u008C6a\u00BC\u00B1\u00D5%\u00AF\u00F5\u00FA\u00ED\u00FA\t\u00E6\u009BG\u00DF\u008B\u00B5\u00EEy@y\u00CBxgi0y\u00D7\u0097\u0096\x01\u00E5a\u009A\u0080\u008D\u0086Z\u00A5\u00C1\u00E4ce\u008D\x18y\u00DF>\u00EC\u00FF\u0090\u00845\u0089\u00F2\u00C3\u00D1\u00F77\u009AN\u00AD\u00D0\u00D9\u00E8\u00FB\u00B6'\x1F'\u00EB0\u0084\u008D\u00A95\u00FC\u00CC\u00B6\u009D\u0087B\u00A9\u00B5\u00BD\u0080\u00D1'\u0096\x18-\u00EB\u0080\u00CF\x1A2\u00A6\u00D6x*\u0091\u00DD\u00B2\u0084Z\u00D5\"*\u00F3\u00A24\u009D-D\x15\u00D5v\u00C2\u008Bp2\u008C\u00DA\u00F5\u0091'\u00C1h\x12\x16\u00BF\u00B97\u009D\u00B4\u00A3\u00B3\u00D3\u00AB4\x16\u00D1\u009F\u00EAG\x0Bu\u00A5\u00F8=_\u0089t\u00F8$\x12\x12U\x16;\u00B8^L\u0091\x1F\u009DA\u00A4\u00BC>\u00F6$\x18\u0095Z\u00C3'\u009Dw+\u00B5U\u00EEJ\u00B1J\u00CEVV\u00BF\u00D4Z\u0093c\u00BE5\u00BD\u009D\u00D6\u00A0\u00EB\u00853v$\u00AFB\u00B5\u00B3\u0081\u00843\u0085\x14g\x10\x19\u00CA\u008A\u00CE(\u00D2y\u00ADOO\u00EC\u00A4\u00D6\u00CA\b\x0B\x01vw\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00_f\x03\x13X\x0B\u00C1\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098\u00D0i\u00B0\u00B2\u00C7gV\u00B3\x7F\u00DF\u00D9\u00C9\u00FA\u00C7\u00B7\u0095\u00E9\u00E5\u00C7\u00B6\u00EB\u00B2^\u00DE\u00E6\u00DF\u00EF\u00BF\f\u00CF\u00D1U\u00BBG\u0085\u00DCkXv+\u00AF\u00E15\u00EB\u00DAk\u00EA<\u00B6c\u00E7\u00CF\rs\u0080\u0097\u0093\x0E\u009735\u00F7\u00A7\u00FA\u00F1\u00F4\u00D6r\u00BBa\u00AE\u00DD0\u0081q9\u0099r9Gxx\u00AE\x03\u009E5\u00FF0.\u008D^\u0083\u008BW\u0093:\u00C7\u00D3\u0086\u00AF4\u00CD\u00D8=\u00D2kxm\u00CA\u0089\u009F\r\u00BCv\x1F\u00A82Taj\u00EFb\u00BA\u00F2h\u0081\u00AE9\u00EF\u00EE\x15\u0097rF\u00EE\x07\u00C5\u00F5\u0095V\taJ\u00F3X\u00C2k\x1E\u00B0\u0091^\u0083\u008B\u00DA\u00CA\x1AM\u00AB~/\u00D5qxm\u00F2\u00D7\u00C8\u00C8\u00EB\u0081,x\u00B40\u00CB\u0091\u0084\u0085\u009A\u0094\u0091k\u00DB\u009B\x10\u00B0\u00BDx-\u0082T\u00FE\\S\x1D[y=\u00B0P\u00ED7X\u00AF{\u00B8\u00F6\u00B1\u00B2\u00DE\u008B\u00FD\u00ED\u00C5\u00B1\u0085W\x1B\x11\r\x1F\u0083\r\x0B\x1D\u0084,\u00A4\x04\u00EBM\u00FA8\u00DC\u00C7\u00C7\u00E0\u008A\u00EA\u00D8\u00F2\u00E3\u00D0VD\u00F3v\u00D6F\u00B4\u00A0\x1B\u00F1\u00F5\u00C3\bT\u00FE\u00CC7\x17\u0087\u0097\u00DD\u00F2\u0097\u00DC\u00FDK\u00C3\u00FB\u00C3\u00DF\u00DE-)mX\x05\u00AC\x16\u009AOS\x1D[o_u\x12\u00ACF\x11\u00A1\u00E0\u00DA\u009E\u00CB>^\u00F8\u00E1\u009E\u00A1\u00C1;T\u00AE;\u0096\u00DB\x14\u00AC\x10\u0096\u00F2\u00FEW\u00C1\u00D9\x1D\u00AC\x11mt\u00E6\u00B5\u00B6G\u00E8\u00BC\u00FB\u00BD\f\u00CF\u009E\u00BD\u0086\u00D7\u00CA\u00C0k\u00E7\x13\bd\u00EB\u00A7n\u00B9\u00B9\u00B5o\u00BD\u00F3?u\u00DAn8~\u00B3~\u00F2K?\u00F7\u00E8\u00F3N\u00DB\u00FD\u00E3\u00C3\u00EF\u00DC\u00D6\u00DBS\u0083\x1B\u00DE]{\u00E2O\u00FD\u00F9U\u00F4\u00BC\u0097\u00DD\u00CF\u00E7\u00AFV\u00FE\u00E9\u00A3\x1F\u00EFx\u00E7\x7F\x18<\u00E6\u00D1\u00D9o\u00DC?'g\x06\u00F7O\u00FF\u00D7\u00F7\u00F3\u00BF|\u00D1i\u009DG\u00CDk\u00D7\u00C1\x02pt\u00E9\u0080\x15\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,\u00E8\x1E\u00E7\u00DC\u00FF\u00EE^j\u00A7J\u008F\u00C7_\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var sss1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0096\x00\x00\x00\u0096\b\x06\x00\x00\x01K\x06At\x00\x00\x00\tpHYs\x00\x00\x05\u0089\x00\x00\x05\u0089\x01mh\u009D\u00FA\x00\x00\x07VIDATx\u009C\u00ED\u009D\u00B1o\u00D4V\x1C\u00C7\u009F;\u00A0\u0084J4\u00A8\u00A9@ :dhUUT'\x013\f\u00F9\x17\u0098\u008B:D\u009D\u00AAn\u00D0\u0089\u008C\u008CUY\u00CA\x02\u00CC\x19Z)k\u0096\u00AEHT\u00EARUTj\x07*\u00B5\x04\u00D1\u0080DK.\bx\u00D5sl\u00DF\u00B3\u00CFw\u00F7\u00BE\u0087\x7F\u00C9\u0085~>'+9\u009F\u00EF\u00F9\u00EB\u00EF}\u00ED\u00B3\u00FD\u00EE\u00BD\u0097y\u00EF]W\u00BC\u00D5YI\x14Fa\t\u0085e\u00E7\u009E\u00E4\u00E9\u00CD\\\u00B6\u00FB\u00F7\u00D7O^\u008CzS\u00F6\u00A1\u00AB\u0096\u00CD\x1E\u00BFw\u00BFz!\u00EC\x01\u00E5\u00E4\u00BC\u00EB9\u00EF\u008E\u00BA\u00ED\u00F9\u009Dh^x\u00AC\u00D6\u0096\u00BBw\u00FA\u0085\u00F3n\u00CDy\u00B7\u00E2>\u00F0\u00BE\u009C\u00CF\u00EEDa{Q\x189\u00A3\u00B0\u0083[X\u00F6\u00FD%\u009F\u00B9l\u00D9E\u0087\u00E56\u00B2\u0087'\u00D73\u0097\u00F52\u0097]\x1BZ\u00B6:\x14G\u0087_w\u00F6\u00B1\u00AF\x1D\u00B6\u00AF_\u00F5\u00B5\u00D7\u00AF\u00DC\x1A\u00FC\u00BFyb\u009D\u00C36\u0085\u00EDea\u009D\u00E6\u00ACK:\u00DDJ\u0084\u00ED'\bSA\u0098J\u00AB\u00B0\u00F2b\u00AC6/|{\u008F\u00B9(\u009BD~\x06\u00D0?\u00BC\u00E3\u00A2\u008B<W\u009CA\u00B4\u00BE5\u00BEH+\u00CF\x0E\u00DC\u00F3C\u00CF\u00E2\u00B3\u0082\u00EA\u00FF\u00EF>\u00F5\u00F1\x19C\u00EA\u0094_\u00FCEg\x15q\u00B9\u00F9\x05dXgtv\u00D1\u00F9\x19F\u0097\x10~\x15\u0084\u00A9 L\x05a*3y\u0080\u009DI\u00B7\x10\u0095\n\u00A2RAT*\u0088J\x05Q\u00A9 *\x15D\u00A5r0D\u00C5\u00F7\x07j\u00F3\u00BF\u00BA\u00FDZg\u0083Q\u00C5\u00F2\u00C5j\u00DE\u00A8{\x19\u00B5\u00FB\x00\u009B'\u00D6\u00F3\u00EB\x7F\u00EF\x16\u00A2\u00CA\u00E3\u00A5\u00FC\u00FF\u00E7\u0087\u009E5\u00EF\x1B$\u00DFs8\u00FB\u00D8\u0087\u00FB\x15Q\u0099\u00BE\u00BA\u00E7\x10\u00D6w\u00EF\u00F4\u008B\u00FA\u00FD\u0088fmu\\\r\u00B2\u00FB\u00E6\x1B\u00E3nX$\u0089\u008An\u00AE\u0094eV\u00A2Zn\u00AE\f\x17\x10\u0084\r\u00B6j\u00A5Vp\u008B\u00A0r#\u009A\x7F[\u0085\u00EDV\u00E5\u0087\u00C7\u0099|^\x7F\u00AE\u00DFv\u00B7\u0087\x0B\u0087T\x10\u0095\n\u00A2RAT*\u0088J\x05Q\u00A9 *\x15D\u00A52\u0093\u00A2f\u00B6\u00FAm\x16\u0099\u00D9{\u00FC\u00B3\bf\t`\u0096\x00f\t`\u0096\x00f\t`\u0096\x00f\t`\u0096\x00f\t`\u0096\x00f\t`\u0096\x00f\t`\u0096@\u00B2Y\u00D9\u00A3\u00E37\u0093\u0097uY\u00CFX\u00F7\u00F8\u00F5[i\u009DX\u008F\x1D*\u00EDC\x05{\u00A86\x0E\u00F5\u00D6E\u00E5\u00FD\u00C8\u00E5\u008B\u008A\u00FC\u00B6\u008Aw\u00EB\u00A9Ek\u00AF\u00A8>\u00BF\u00EB\u00BC\u00DB\x1A\u00D2\u00BA\u00B5x_\u00D1\u00AA\u0098\u00D4k\u00B4\u0080\u00D8(\u00EA\u00DB/\u00EE\u00B7i\tZ}\u00DE\u00CC\x7F\u00F7\u00EF\u00DA\u00B4Z'\x0B)~y\u0091O[\u008B\u00F7[\u00CC\n\u008F\u00CB\u00D1\u00FC^.8,\x1F6`\u00C2\u00AF2B\u00BF\x04\u00E5T<\u00BF\x10?\u008F\u0097\u0091\u00B4\x0E~\u00D5q1j\u00DAR\u00FF\u00D9\u0089w\x0B\u009A\u00D6\u00D4O\u00EF\u00E9\u0091W\u00CDOl\u00E4\u00B2\u00DB\u00F3;\u00A9?]\u00A9Z\x04\x0F6`5\x7F~\u00E7\u00FC\u00E0\u00A71\u00E1\u00F9\u00F5\u00AB\u00C9\u00BF\u00D1q\x7F\u009Ezi\u00A1\u0095\n\x0B\x01N\x1D\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x04\u00B8\u009F%@\u00B2\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K\x00\u00B3\x040K \u00BD\u00F5\u00BD\u00D0J]i\u00FDn\u0081\u0099\u00D6\u00A4\u00A6\u00B1EG\u00F0)Mi\u00F3f\u00B4\t\u00ED\u008D\u00AD\u00A6\\\u00EB\u0095[5\u00ADqG\u00F3\u00AF\u00A3u\u00EA\x06\u00E5#\u00DA;K\u008D\u00C9\u00BB\u009E\u00DA\x1A\u0094\u0097f\u00B5h\u0095\x1A\u0093O4k\u009CQ\u00CD\u0096\u00EC\u00FBm\u00D8\x18\u00A3\u00CA.\n\u0096#\u00CDK\u00D3\x18&\u00AF\u00BCa\u00D6P\x1F\t\u00FBa\u00D88\u00AD\u00CE\u00BBk\u0085\u00D6\u00D6~(\x14\u00AD\u00A3\x05L\u00EEX\u00E2F[\u00B2\u00FC>\u00F4\x1A2Nk\u00E8)$\u00F4\x18\u00D2\u00D8\x1BnL\u00A3U\x15\u00B1\x10\u0089h\u00DF\rE\u00A3Fux\x11:\u00C3h<\x1F\u00DB\t\u00C6\u0098\u00AEU\u00F2N:\u00DA:\u00ED\u00E8\u00AC{\u0095V\x11\u00FD\u00B9~\u00B4Qg\u00E2!R\u00AAH\u0087o\"!Q\u00A5\u00D8\u00EAy1D~\u00D4\u0083H\u00F9|b'\x185\u00AD\u00DB\u00F3;\u00E5\u00FB#}+\u00E1\x18\u00E6\u009B\u00BB_\u00AA\u00D6\u00E4\u0098\x17+OHJ/\u00F4\u00D8\u0091\u00BC\x0B5z\x03\t=\u0085\x14=\u0088\f\u00CC\u008Az\x14\u00E9\\\u00EB\u00D3#\u00AFR\u00B5\u00D2\u00C2B\u0080\u00CB\x1D\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00C0,\x01\u00CC\x12\u00E0\u00C7l`\x02{!\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13:\rV\u00F6\u00F0\u00E4z\u00F6\u00CF;\u00AF\u00B2\u00FE\u00E1\x1Dex\u00F9\u0089\u00E5\u00BA\u00AC\u0097\u0097\u00F9\u00D7\u00FB/\u00C3:\u00BA*\u00F7\u00A0\u0090\u00FB\x1A\u00B6\u00DD\u00CA\u00D7\u00F0\u0099u\u00EDk\u00EA8\u00B6\x13\u00C7\u00CF\rc\u0080\u0097\u0083\x0E\u0097#5\u00F7\u00E7\u00FA\u00CD\u00A1\u00B8\u00A5r\u00C3X\u00BBa\u00A8\u00FEr0\u00E5r\u008C\u00F0\u00B0\u00AE=\x1E5\x7F?\u00A6V_\u0083\x17\u00C1\u0093\u00E1!\u00CE\u00D7F\rq\u00DE\u00EAk\u00F8l\u00CA\u0081\u009F\r|\u00ED>Pe\u00A8\u00C2\u00D0\u00DE\u00D1p\u00E5\u008D\r[\u008E\u0086\x03\u00BF;j\u0080\u00FC\u00CA\u00840\u00A4yl\u00C2\x1B\x1E\u00B0\u00B1\u00BE\x06/Zv\u00D6hh\u00F5\u008D\x14\u008F\u00C3g\u0093\x7FFF\u00BE\u00EE\u00D9\u0086G\x1B\u00B4\x16\u009B\x10\x06\u00E4/\u00FE\x1E\x1D/\u00F4\u00CD\x0F\u00D8\u00B4\u00BE\x16C\u00D0\u0097\u008F\x15\u00C5c+_\u00F74T\u00C5\u0086\\\u008E6\u00BA|l9\u00EF\u0096&\u008B}s\u00C3\u00F5\u009A;\u00EBF\u00FC5\u00A8zl\u00E1\u00AB\u008D\x11\u0093\u00BF\x06\u008F\u00FA\u00E1=m\u00E3\u00FF\x18\u00A8.\x02\x16y\u00B8\u00A6xl\u00F9uhkDK\u00C0\u00E2\u00BDkR\u00A8\u00F6\"P\u00F9\u00DA\u00AF_\x1DL\u00F9\u00EC\u00DA\u00EB\u00AB\u00EE\u00CE\u00F9\u00C1\u00EB\u00E1\x7F\u00EFV\u00952,\x03\u00D68:-\u00A7xl}~\u00D5I\u00B0Z\u008D\b\u0082[\u00AE\\\u00A6\u00FC\u00E0\x07W\u0086\x06G\u00A8\u00DC\u00F2\u00D8\u00DC\u00B6`\u0085\u00B0\u0094\u00AF\u00EF\x06g8Xc\u00CA\u00E8\u00CC\u00D7\u0096+B\u00E7\u00DDo\u00E5W\u00DDT\u00BE\u0086\u00CF\u00CA\u00C0\u00D7\u00CE\x07\x10\u00C8\x1E\x1D\u00BF\u00E9\x167\u00BF\u00F1\u00CE\u00FF\u00D4i\u00B9\u00E1\u00FE\u00CD\u00A3c_\u00F8\u00C5\x07\u009FuZ\u00EE\u00EF\x1F}\u00EB\u00B6\u00DF\u009E\u00ABf\u00BC\u00BB\u00F9\u00C4\x1F\u00FF\u00E3\u00CBh\u00BD\x17\u00DC\u00CFg.\u00D5\u00DE\u00F4\u00F1\u008F\u00B7\u00BD\u00F3?T\u00CB<8\u00F5\u00B5\u00FB\u00FB\u00D8B\u00F5\u00FA\u00FC\u00BF}\u00BF\u00F4\u00CB\u00E7\u009D\u00EA<h\u00BEv\x1D,\x00G\u0095\x0EXA\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\u0082\u00EEq\u00CE\u00FD\x07\u00BC\u00B5y\u00CB\u00AEG#\u00A7\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var bb1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0096\x00\x00\x00\u0096\b\x06\x00\x00\x01K\x06At\x00\x00\x00\tpHYs\x00\x00\x05\u0089\x00\x00\x05\u0089\x01mh\u009D\u00FA\x00\x00\x07aIDATx\x01\u00ED\u009D\u00BDo\x14G\x18\u0087gS ;\u0091\bV\x1C\u0081@\u00A4H\x11\x14ED'\u0085\u00D4P\u00E4_p\x1D\u0094\x02\u00A5\u008A\u00D2\u0099T\u00B8t\x19\u0085&n\u0080\u00DAE\u0090\u00DC\u00BAI\u008BD\u00A44QD\u00A4\u00A4 R\u0082\x11\x01$\x12|F\u00C0D\u00B3\u00EC\u00EE\u00CD\u00EE\u00ED\u00DE\u00CD\u00CF\u00DE\u00D7>\u00E0yN+\u00FB><\u00F7\u00DEs\u00BF=\u00EF\u00C7\u00CDL\u00E6\u00BDw}\u00F1Fo-\u00D1\x18\u008D%4\u0096}\u00FA0Oo\u00E6\u00B2\x17?\x7F\u00FB\u00F8i\u00D7\x1Fe\u00A7\u009C\u00CF\\\u00B6\x10\x1E\u009B=x\u00F7vuGX\x03\u00CA\u00C5y7p\u00DE-\u00B8\u00ED\u00F9\u009D\u00E8\u00B6pY\u00A9=\u00EE\u00D6\u00E9\u00A7\u00C5\u00EDK\u00EE\x03\u00EF\u00CB\u00DBY\u009Dhl?\x1A#g4\u00F6\u00F26\u0096]?\u00EF\u00AB\u008F\u00ECS\u00AE3\u00C9\u00D9\u00DD\x13\x1B\u0099\u00CB\x06\u0099\u00CB\u0096\u00C7\x1E[}\x14G\x1F\u00BF\u00EE\u00CC\x03_\u00FB\u00D8\u00BE|\u00C9\u00D7\u00EE\u00BFxu\u00F4\u00FB\u00D6\u00F1\r>\u00B6il?\x1B\u00EB5g}\u00D2\u00EB\u00AB\u00A4\u00B0\u0083\u0084\u00C2T(L\u00A5\u00B5\u00B0\u00E6\u00CEX\u00F1\u00FB`\u00D2N\u00D94\u00F2-\u0080\u00E1\u009B;E[\u00CBU\u00BB\u00D7\u00CF\u00B7\x7F\u0090\u00C6;i\u00E5\u00D6\u0081{r\u00E8q\u00B4#7\u00DA\x02\u00F8\u00E1s\x1Fo1\u00A4.\u00F9\u00CE_\u00B1U\u00E1\u00BC\u00BB\u00EF\u00BC[.~_\u00CAw \u00C3sF[\x17\u00BDoa\u00F4\t\u00E1W\u00A10\x15\nS\u00A10\u0095\u0099\u00FC\u0080\u009DI[\x14\u0095\nE\u00A5BQ\u00A9PT*\x14\u0095\nE\u00A5BQ\u00A9\u00BC\x1CE5\u008E\x0F\u00ACU\u00B7\x7FsmO[\u0083\u00F1\u00B1\u008C\u00EALE\u00D7\u00B1\u008C\u00DA\u00F1\u0086\u00AD\u00E3\x1B\u00F9\u00FE\u00BFwG\u00A2c\x0E\u009B\u00F9\u00EFO\x0E=\u008E\u00CFFH\u00C7\x1C\u00CE<\u00F0\u00E1xE|\x1C\u00A3<\u0096\u0091?\u00DF\u00AD\u00D3O\u00EB'\u00B2\u009Bg\u00AB\u00E3\u00D3 \u00DE\u00ADU\x7F\u00DCq\u00C0\"\u00A9\u00A8\u00FA\u00C1\u0095\u009B\u00B5\u00A2Z\x0E\u00AE\u008C7\x10\n\x1B\u00BD\u00AA\x0B\u00B5\u0086[\n\u00AA\u008E\u00BA4~\u00B6\x16\u00E6\u00DD\u00A0hw!\u00FF9\u009C\x1B\u00B6\x1D\u00EDa\u00C7!\x15\u008AJ\u0085\u00A2R\u00A1\u00A8T(*\x15\u008AJ\u0085\u00A2R\u00A1\u00A8Tf\u00B2\u00A8\u0099=\u00FD6\u008B\u00CC\u00EC1\u00FEY\x04Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\u0081dY\u00D9\u00BDcW\u0092\x1F\u00EB\u00B2\u0081q\u00DD\u0093\u009F\u00DF\u00AA\u00D6\u00A9\u00E7\u00B1\u00C3I\u00FBp\u0082=\u009C6\x0E\u00E7\u00AD\u00EB'\u00EF\u00D7\u00C6\x1E_\u009C\u00C8o;\u00F1n\u00BD\u00B4\u00D4:\u0088j]\u008E;8\u00E4\u00B7\u00DF_\u00BC\u00AD\u00D4\u00AAH\x1A\u00D4\u00FF0\u00BF\u00AC7{Y\x1C\u0084\u00B4I\u00B5:\u00EFV\u009B\u00B2\u00CA\u00AE\u00FCj\u00AD\u00D3\x0B)\u00BEy\u0091/\u00F7\x17o7d\u0095\u0097\u00F5\u00E8\u00F6A^px|x\x01S\u00BE\u0095\x11\u00C6%(\u0097\u00E2\u00FA\u00B9\u00F8z\u00FC\x18\u00A9\u00D6z\u0097\u0099\u00E5RV\u00D1\u00DD\u00A5\u0094vD\u00AB5\u00F5\u00DD{t\u00F8y3]\u009D\u008F\u00DD\u009E\u00DFI\u00FD\u00EAJ\u00D5#x\u00F4\x02V\u00F2\u00EB7\u00CE\u008E\u00BE\x1A\x13\u00AE_\u00BE\u0094\u00FC\x1D\x1D\u00F7\u00D7\u00C9g\x16\u00B5r\u00C2B\u0080M\x07\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x048\u009E%@\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096@z\u00EF{\u00A1\u0097\u00BA\u00D2\u00FB\u00DD\x02\u00B3Z\u0093\u00BA\u00C6\x16\x03\u00C1G\u00BD\u00D9\u00C7z\u00B2\u00D7\u00BA\u00D1&\u00F47\u00B6Z\u00F2Z/^\u008Dk]\u008A\u00FAr\u00AF\u00ED\u00A5\u00D6]u(\u00EF\u0092\u00A5v&\u00EF{\u00E9\u00E8P~\u00B3\u00ECD\x1E\u00CBR;\u0093O\u00955\u00A1\u00E7\u00FDr\u00DC\u00F7~\x16\u0084\u00B5\u0089\u00F2\u00A3\u00DE\u00F7\u00AB\u008D\u00D1\x026w#L~\u00F2f\u00B2\u009Ac$\x1C\u0084\u00B0)\u00B5\u0086\u00CBB\u00D78\x14J\u00AD\u00DD\x05L\x1EXb\u00B2\u00AC}\x1E5dJ\u00ADq\u009Dkc\u00B2\u0084Z\u00D5\"\u00CA\u00A1U\u00C6\x06\u0094\u00D8\u00AD\u00A8\u00AE\x01/\u00C2`\x18\u008D\u00EB\x13\x07\u00C1h\x13V~\u00B8G\u00B2j\u0083v\u00F46\u00BCJk\x11\u00C3\u00B9a\u00F4\u00A2\x16ZW\u00BF\u00F0\u009FHHTYlu\u00BD\u0098\"?\x1AA\u00A4\u00BC>u\x10\u008CZ\u00AD\u00E1?]\u00B1\u00DAE\u00F5]\u00A8\u00A6_\u0089W\u00BF\u00D4Z\u0093c\u00BE=\u00BF\u0093\u00D6\u00A0\x1B\u0084\x11;\u0092W\u00A1\u00C6h a\u00A4\u0090b\x04\u0091\u0091\u00AChD\u0091\u00DEk}t\u00F8yj\u00AD\u00F4\u00B0\x10`wG\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t\u00F0e60\u0081\u00B5\x10L X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\u00BD\x06+\u00BB{b#\u00FB\u00F7\u00ED\u00E7\u00D9\u00F0\u00CD\u009D\u00B6\u00E9\u00E53\u0097-g.\u00F3\u00C5\u00B2\u009A\u00DC\u00AE\u00CB\x06y\u009B\x7F\u00BF\u00F7,<\u0087\u0095\u008CY%\u00F7\x1A^{\u0087\u00D7\u0086\u00ABd\u00C7\u0095\u00D7\u00F0\u009E\u00F5\u00ED5u\x1E\u00DB\u00A9\u00F3\u00E7\u00869\u00C0\u00CBI\u0087\u00CB\u0099\u009A\u0087s\u00C3\u00B6\u00A9\u00B8\u00DB\u00A6\u00E4\u00EF\u009Ck7L`\\N\u00A6\\\u00CE\x11\x1E\u009Ek\u009Fg\u00CD?\u0088\u00A5\u00D5kp\u00F1bR\u00E7\u00D8\u00EBz\u00E4u\u00AA\u00E3\u00DCkxo\u00CA\u0089\u009F\r\u00BC\u00F6\x1F\u00A82Taj\u00EFb\u00BA\u00F2\u008E`mFB:C\u0096K\bS\u009A\u00C7\x12^\u00F1\u0080M\u00F4\x1A\\D\u00A1\u00F2\u00F5\u00A9\u00D57S\x1D\u0087\u00F7&\x7F\u008F\u008C\u00BC\u00EE\u00CB\x0B\u00EF\bV\u0098\x13\x7F\u00B51\u00DF\u00FC\u00C2\u00EB\x1C\u00B0\u00DDx-\u00A6\u009F//\x17T\u00C7V^\u00F7-T-\u00C1Z\u00F3\u00F5\u00B5-\x173\u00B9\u00D8W7\\{XY7K{\u00BBul\u00E1\u00D5FD\u00CB\u00BF\u00C1\u0094\x17\u00FD:\x06j\u00AF\x01\u008B\u00FC\u00AD\u00AB\u008E-\u00FF\x1D\u00DA\u008Ah\x04\u00CCy\u00B7\u00D4X{\u00AAm\u0081\u0083\nT\u00FE\u00EC\u0097/\u008D\u0096q\u00F9+\u00EE\u00C6\u00D9\u00D1\u00FD\u00E1w\u00EFV\u00946\u00AC\x02\u00D6\b\u00D1g\u00A9\u008E\u00AD\u00B7\u00AFz\tV\u00AB\u0088Ppc\u00CFe\x0Fo\u00FCh\u00CF\u00D0\u00E0\x13*W\x1E\u00CBm\x0BV\bKy\u00FF\u008B\u00E0\u008C\x07kB\x1B\u00BDym\u00EC\x11:\u00EF~/\u00B7\u00A5v\u00ED5\u00BCW\x06^{\u009F@ \u00BBw\u00EC\u008A[\u00DC\u00FA\u00CE;\u00FFs\u00AF\u00ED\u0086\u00E37\u00F7\u008E~\u00E5\x17\u00EF|\u00D1k\u00BB\x7F|\u00F8\u00BD\u00DB~k\u00AE\u00BA\u00E1\u009D\u00AD\u0087\u00FE\u00D8\u009F_G\u00CF{\u00CE\u00FD\u00F2\u00C9\u00F9\u00DA\x1F}\u00F4\u00D35\u00EF\u00FC\u008F\u00D5c\u00EE\u009C\u00FC\u00D6\u00FDs\u00F4Hu\u00FF\u00FC\x7FC\u00FF\u00FE\u00AF_\u00F6Z\u00E7\u00CB\u00E6\u00B5\u00EF`\x018N\u00E9\u0080\x15\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,\u00E8\x1F\u00E7\u00DC\u00FF\u00A0\u00A4Q\u00B6Z\"\x0E0\x00\x00\x00\x00IEND\u00AEB`\u0082";
			// var ii1mg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u0096\x00\x00\x00\u0096\b\x06\x00\x00\x01K\x06At\x00\x00\x00\tpHYs\x00\x00\x05\u0089\x00\x00\x05\u0089\x01mh\u009D\u00FA\x00\x00\x07QIDATx\u009C\u00ED\u009D?l\u00DCT\x1C\u00C7\u009FATI\u0091J\u00AA\x06\u00B5jU\u0086\f \u0084@\u0091(\x0BK;0!V&\x06*\u0086\u008A\t\u00B1\u00B5L\u00CD\u0098\x11\u00D1\u0085,m\u00B7J\x1D@\u00CA\u00DA\x05\u00B1U\x02\u0089\x05!\u0090\u00CAP$h\u00AA\u0092F\x14\u009AK\u00D5\u00F6\u00A1\u00E7\u00DA\u00BEg\u009F\u00EF\u00FC\u00BE\u008D\x7F\u00C95\u00FA|\"+\u00B9;\u00E7\u00F9\u00E7\u00CF}\u00CF\u00F1\u009F<\u00BF\u00CC{\u00EF\u00FA\u00E2\u00B9\u00DEZ\u00A21\x1AKh,{g#Oo\u00E6\u00B2'\u00DF\x7F{\u00EB\u00E1\u00B8_\u00CA^s\u00D5\u00BC\u00D9\u00DD\u0097oV/\u0084O@99\u00EF\x16\u009Dw\x0Bnsv+z.|-\u00D5\u00E6\u00FB\u00F5\u00CD\u0087\u00C5k\x0B\u00EEU\u00EF\u00CB\u00E7\u00F98\u00D1\u00D8N4F\u00CEh\u00EC\u00D9m,\u00FB\u00F6t\u0095\u00DEr\u00B3\u00DCFv\u00FB\u00D8j\u00E6\u00B2\u00C5j\u00F3\x1E\u00CF[m\u008A\u00A3\u00CD\u00AF;q\u00D7\u00D76\u00DB\x17\u00CE\u00FB\u00DA\u00EB\u00E7.\r\x7F^;\u00BA\u00CAf\u009B\u00C6v\u00B2\u00B1^s\u00D6'\u00BD\u00AE%\u0085\u00ED&\x14\u00A6Ba*\u00AD\u0085\u0095\x07c.> \x0B\x7F\u00BD'\x1C\u0094u\u0091\u00EF\x01\f\u00F6o\u0095mV\u00EDF{\x105\u00E2\u0083\u00B4r\u00EF\u00C0=\u00D8w?\u00DE+\u00A8~\u00FE\u00E6c\x1F\u00EF1\u00A4N\u00E1\u00E0\u00AF\u00B6W\u00E1\u00DD\x0Fe\u00BB\u00F9\x01dXf\u00B4w\u00D1\u00FB\x1EF\u009F\x10~\x15\nS\u00A10\x15\nS\u0099\u00CA\r\u00ECT\u00DA\u00A2\u00A8T(*\x15\u008AJ\u0085\u00A2R\u00A1\u00A8T(*\x15\u008AJ\u00E5\u00D9(\u00AAq~`\u00B9z\u00FE\u008B\u00CB\u00DB\u00DA\x1Bl\u009C\u00CB\u00B8\u00E6&\u009D\u00CB\u00A8\u009DoX;\u00BA\u009A\x1F\u00FF{7W\u009C\x0F8[\u00BD\u00F6`\u00DF\u00FD\u00F8\u00BC\u0081t\u00CE\u00E1\u00C4]\x1F\u00CEW\x14m\x1E\u00AC\u00B5\x1B\u0096W\\\u0090.\u00A7\u00BA\u00A9\u008DC\u00EF\u00E7\u0085:\u00BF1R\u00FD\x0B\x0F\u00DE-M\u00CA\u009A\u00FE\u0099s\u00EE\u0083+\u009B\u00C5\u00A3\x1B\u00B5\u00D7\u0096O;\u00F7\u00D1\u00F7\u00CF\u008F5U\u009DI)\u00D6j\u00E4\u00ACM\u00E3\fJ|\u00AD\u00A7\u00F9\u00BD\u00F5\u00F7\u009F\\\u00CA\x1F\u009E\u00A5\x19\u00CC\f\u00DA\u00CE\u00F6p\u00E0\u0090\nE\u00A5BQ\u00A9PT*\x14\u0095\nE\u00A5BQ\u00A9PT*SY\u00D4\u00D4^~\u009BF\u00A6\u00F6\x1C\u00FF4\u0082,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096@\u00B2\u00AC\u00EC\u00CE\u0091\u008B\u00C9\u00F3\u00BAl\u00D1\u00B8\u00EE\u00C9\u00CB\u00B7\u00AA\u00B5\u00F3\u00E2z\u00B8h\x1F.\u00B0\u0087\u00CB\u00C6\u00A1S@q\u00F1>\u00BA\u00D8\u00BER\u009B\u00BF\u00B8\u0090\u00DFv\u00E1\u00DDzj\u00A9u\u00B1\u00D1S\u00BDV\u00AF[\u009F\u00BF\u00A9\u00D4\u00AAHZ\x1C\u00FDew6\u00BE\u00E6\u00BE[\u00D2\u00BAju\u00DE-\x17\u00B2Z\u00EBM\u00AD\u00B5\u00BB\u0090\u00A2\u00ABH>\u00AD\u00CF\u00DF\u00EC\u0092\u0095\u00FF\u00D3B(8\u00CC\x1FV\u00A0\u00E5\u009F \x1A\u00F3/\u0095S\u00F1\u00F8T\u00FC8\u009EG\u00AA\u00B5\u00D1e\u00A6\u00A8\u00B5Vo\u00F8\u0094h\u00B5\u00A6\u00BE{\u00F7\x0E<nKW\u00EB\u00BC\u009B\u00B3[]\x0B\u00AE\u00ADH\u00E8\x11\\\u00ACD.&<\u00BE~r\u00B8R\u00E1\u00F1\u0085\u00F3\u00C9\u00FF\u00A3\u00E3\u00FE<\u00FE\u00C8\u00A2V.X\b\u00B0\u00EB \u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00E7\u00B3\x04H\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12H\u00EF}/\u00F4RWz\u00BF[`VkR\u00D7\u00D8\u00E2F\u00F0-\x1D\u00B5\u00C3\u00D7\u00D5\u0091n\u00B4\t\u00FD\u008D\u00AD\u00A6\u00BC\u00D6s\u0097\u009A=\u00EF?,j\u00AD\u00D5\u00AB\u00D6\u00BA\u00DD\x0E\u00E5\u00A1W\u00FB\u00C1\u00E8\u00B1\u00D4\u0099\u00BC\u00EFiB\u0087\u00F20^\u00E2z\\\u00AF\u00DA\u0099\u00BCS\u00D6$QQ\u00B2V\x1A\u00CF\u00ED\u008A\u00B0q\u00A2\u00A2:\u0097\u009B\u00F5\u00F6\u00D6\u00FB~\u00D2\u00C2'\u00C9\u00DA\ra]\u00B5F7\u00C0\u00D8\u00D6\u009B;\u00BE\u0080\u00B4\u009B`\u00B4\u00CB\u00DA\u00E1\u00BB\u0086$\u00DC\x04\u00C3\u008F\u00ABW\u00A9U-b\u00AEY\u00C4vo\u00AF2\u00EE\u0086\x17\u00E1f\x18\u008D\u00C7\x13o\u00821NX\u00B9qo\u00AB\u00B7\u00B7\u00DB\u00AB\u00B4\x161\u0098\x194Vtad\x03\x1F\u00FE\x12\t\u0089*\u008B\u00AD\x1E\x17C\u00E4Gw\x10)\x1Fw\u00DE\x04\u00A3V\u00EB\u00E6\u00ECV\u00F1\u00FBW#Y\x0B\u00D1\x06~\u00F8\u00F1K\u00AD59\u00E6\u00C5\u00C2\x13\u0092\u00B2\x18\u00EE\u00D8\u00912o%'\u00BA\x1BH\u00B8SHq\x07\u0091\u00A1\u00AC\u00E8\u008E\"\u00BD\u00D7z\u00EF\u00C0\u00E3\u00D4Z\u00E9a!\u00C0\u00E1\u008E\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12@\u0096\x00\u00B2\x04\u0090%\u0080,\x01d\t K\x00Y\x02\u00C8\x12\u00E0\u009F\u00D9\u00C0\x04>\u0085`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL\u00E85X\u00D9\u00EDc\u00AB\u00D9\u00BF/=\u00CE\x06\u00FB\u00B7\u00BA\u0086\u0097\u00CF\\v0s\u00D9r\u00E6\u00B2\u0095\u00F0s\u00C7\u00BC\u008By\u009B\x7F\u00BD\u00F2(,\u00C3J\u00C6\u00B4\u0092{\r\u00EB\u009E\u00E05r\u00D6\u00E9\u00B7\u00F2\x1A\u00DE\u00B3\u00BE\u00BD\u00A6\u008Ec\u00DB9~n\x18\x03\u00BC\x1Ct\u00B8\x1C\u00A9y03h\x1B\u008A\u00DB\x0FG\u00C5\x1F\x19\u009A\x7Fd\u00AC\u00DD0T\x7F9\u0098r9FxX\u00D6\x0E\u008F\u009A\u00BF\x1BS\u00AB\u00D7\u00E0\"8i\x1F\u00E2\u00FCj\u00E4t\u00AC\u00DF\u00DCkxo\u00CA\u0081\u009F\r\u00BC\u00F6\x1F\u00A82Tah\u00EF\u00C6p\u00E5\u008D\u0095\x0B\u00C3\u0082_+\u00A63\x13\x07r\x0EC\u009A\u00C7\x12\u00F6x\u00C0&z\r.\u00C6\x7FX\u00CB\u00AFk]~\u00C3{\u0093\u00BFGF^wt\u00C5\x1B+v6\x12\u00B1\u00920\u00FF\u009E\x0F\u00D8v\u00BC\u0086\u00F0D>\u00CF\u00A4\u00FA\u00B5\u00F2\u00BA+\u00A1z\u009A`\u00ED\u00F5pm\u00D7k\u00B1e\u00AA\u0086\u00FFW\u00FCZx\u00B5\x11\u00D1\u00F1gp\x1AV|\u00AF\x05\u00AC\u00B9?\u0095\u00E2\u00D7\u00F2\u00CF\u00A1\u00AD\u0088\t\x01K\\q\u00F3@\u00E5K\u00BFp~8\u00E5O\u00D7^_r\u00D7O\x0E_\x0F?{\u00B7\u00A4\u00B4a\x1D\u00B0\u0086\u00CB\u00F7\u00BA\u00FCZ\u00EF_\u00F5\x12\u00ACV\x11\u00A1\u00E01G.O\u00F1\u00C6\x0F\u008F\f\r\u00B6P\u00B9\u00F6Xn[\u00B0BX\u00CA\u00D7\u009F\x04g4X\x13\u00DA\u00E8\u00CD\u00EB\u0098#B\u00E7\u00DD\u008D\"@\u00EB\u00B2\u00D7\u00F0^\x19x\u00ED}\x00\u0081\u00EC\u00CE\u0091\u008Bn~\u00ED+\u00EF\u00FCO\u00BD\u00B6\x1B\u00CE\u00DF\u00DC9\u00FC\u0099\u009F\u00BF\u00F5I\u00AF\u00ED\u00FE\u00FE\u00FA\u00D7n\u00F3\u00C5\u0099\u00EA\u0089Ck\x1B\u00FE\u00C8\x1F\u009FG\u00CB=\u00E5~~\u00FBt\u00ED\u0097\u00DE\u00F8\u00F1\u00B2w\u00FE\u00BBj\u009E[\u00C7\u00BFt\x7F\x1F\u009E\u00AB^\u009F\u00FDo\u00E0\x17~\u00F9\u00B4\u00D7:\u009F5\u00AF}\x07\x0B\u00C0qI\x07\u00AC X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`\u0081\t\x04\x0BL X`\x02\u00C1\x02\x13\b\x16\u0098@\u00B0\u00C0\x04\u0082\x05&\x10,0\u0081`A\u00FF8\u00E7\u00FE\x07\u0089\x13?\x16\u0095\ra\u00C1\x00\x00\x00\x00IEND\u00AEB`\u0082";

			if (pal !== null) {
				var res = "group{orientation:'row',alignment:['fill','fill'],minimumSize:[600, 480],margins:-14,\
								leftPart:Group{orientation:'column',alignment:['fill','fill'],spacing:3,\
									listArea:ListBox{\
										alignment:['fill','fill'],\
										properties:{numberOfColumns:3,columnTitles:['#', '" + es_str.time + "', '" + es_str.content + "'],\
										showHeaders:true,multiselect:true}\
									},\
									buttonArea:Group{orientation:'row',alignment:['fill','bottom'],\
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
								rightPart:Group{orientation:'column',alignment:['right','fill'],margins:[-20,20,0,0],\
									editText:EditText{\
										text:'',alignment:['fill','fill'],\
										properties:{multiline:true,scrolling:false,borderless:false},\
									},\
									btGroup:Group{orientation:'column',alignment:['fill','bottom'],alignChildren:['fill','top'],\
										bbt:Group{orientation:'row',\
											bButton:IconButton{text:'<b>',alignment:['fill','fill'],\
											properties:{style:'toolbutton'}},\
											bsButton:IconButton{text:'</b>',\
											properties:{style:'toolbutton'}},\
											bbButton:IconButton{text:'<b> </b>',\
											properties:{style:'toolbutton'},\
												preferredSize:[120,30]}\
										},\
										ibt:Group{orientation:'row',\
											iButton:IconButton{text:'<i>',alignment:['fill','fill'],\
											properties:{style:'toolbutton'}},\
											isButton:IconButton{text:'</i>',\
											properties:{style:'toolbutton'}},\
											iiButton:IconButton{text:'<i>  </i>',\
											properties:{style:'toolbutton'},\
												preferredSize:[120,30]}\
										},\
										ubt:Group{orientation:'row',\
											uButton:IconButton{text:'<u>',alignment:['fill','fill'],\
											properties:{style:'toolbutton'}},\
											usButton:IconButton{text:'</u>',\
											properties:{style:'toolbutton'}},\
											uuButton:IconButton{text:'<u> </u>',\
											properties:{style:'toolbutton'},\
												preferredSize:[120,30]}\
										},\
										sbt:Group{orientation:'row',\
											sButton:IconButton{text:'<s>',alignment:['fill','fill'],\
											properties:{style:'toolbutton'}},\
											ssButton:IconButton{text:'</s>',\
											properties:{style:'toolbutton'}},\
											sssButton:IconButton{text:'<s>  </s>',\
											properties:{style:'toolbutton'},\
												preferredSize:[120,30]}\
										},\
										fbt:Group{orientation:'row',\
											fsButton:IconButton{text:'<font size=20>',\
											properties:{style:'toolbutton'},\
												preferredSize:[90,30]},\
											fsValue:EditText{text:'20',characters:'3'},\
											fcButton:IconButton{text:'<font color=00FF00>',\
											properties:{style:'toolbutton'},\
												preferredSize:[100,30]},\
											fcValue:Button{}\
										},\
										midGroup:Group{orientation:'row',alignment:['fill','fill'],margins:[0,10,0,0],\
											position:Group{orientation:'column',alignment:['left','fill'],\
												upbt:Group{orientation:'row',alignment:['left','top'],\
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
												mdbt:Group{orientation:'row',alignment:['left','top'],\
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
												bobt:Group{orientation:'row',alignment:['left','top'],\
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
											extraPo:Group{orientation:'column',alignment:['fill','fill'],\
												pos:Group{orientation:'row',alignment:['fill','top'],\
													posButton:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "pos(192,144)}',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}},\
													textX:StaticText{text:'x:',alignment:['right','fill']},\
													posX:EditText{text:'192',characters:4},\
													textY:StaticText{text:'y:'},\
													posY:EditText{text:'144',characters:4},\
												},\
												fade:Group{orientation:'row',alignment:['fill','fill'],\
													fadButton:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "fad(300,300)}',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}},\
													inText:StaticText{text:'i:',alignment:['right','fill']},\
													fadIn:EditText{text:'300',characters:4},\
													outText:StaticText{text:'o:'},\
													fadOut:EditText{text:'300',characters:4},\
												},\
												other:Group{orientation:'row',alignment:['fill','fill'],\
													bord:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "bord(2)}',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}},\
													metri:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "fsp(2)}',\
														preferredSize:[50,30],\
														properties:{style:'toolbutton'}},\
													blur:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "be(2)}',\
														preferredSize:[40,30],\
														properties:{style:'toolbutton'}},\
													bfbVal:EditText{text:'2',characters:2,alignment:['fill','center']},\
												},\
											}\
										},\
										fix:Group{orientation:'row',alignment:['fill','fill'],\
												direct:Group{orientation:'row',alignment:['fill','fill'],spacing:0,\
													verticalImg:Image{preferredSize:[30,30]},\
													vertical:Checkbox{text:'',alignment:['left','bottom']},\
												},\
												move:Group{orientation:'row',alignment:['right','fill'],spacing:3,\
													moveButton:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "move(...)}',\
														preferredSize:[60,30],\
														properties:{style:'toolbutton'}},\
													x1:EditText{text:'384',characters:3},\
													y1:EditText{text:'144',characters:3},\
													x2:EditText{text:'-50',characters:3},\
													y2:EditText{text:'144',characters:3},\
													moveIn:EditText{text:'0',characters:4},\
													moveOut:EditText{text:'3000',characters:4},\
												},\
										}\
										rebtGroup:Group{orientation:'row',alignment:['fill','bottom'],\
											rfButton:IconButton{text:'" + es_str.refresh + "',alignment:['fill','fill'],\
												properties:{style:'toolbutton'}},\
											epButton:IconButton{text:'" + es_str.xport + "',alignment:['fill','fill'],\
												properties:{style:'toolbutton'}}\
										}\
									}\
								}\
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
				pal.grp.minimumSize = pal.grp.size;
				pal.layout.resize();
				pal.onResizing = pal.onResize = function () {
					this.layout.resize();
				};

				// var textGreen = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, [0, 1, 0], 1);


				pal.grp.leftPart.listArea.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);
				pal.grp.rightPart.btGroup.fbt.fcValue.colorHex = "00FF00";
				// pal.grp.rightPart.btGroup.fbt.fcValue.fillBrush = pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);

				pal.grp.leftPart.listArea.onChange = function () {
					pal.grp.rightPart.editText.backupSelection = "";
					// pal.grp.rightPart.editText.active = !0;
					var i = this.selection[0].index;
					comp.time = comp.layer(slIndex[i]).outPoint - markerTimeOffset / comp.frameRate;
					pal.grp.rightPart.editText.text = comp.layer(slIndex[i]).property("Marker").valueAtTime(comp.layer(slIndex[i]).outPoint - markerTimeOffset / comp.frameRate, !0).comment.replace(reg, "\r");
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
					triggerMarker(pal, null, null, null, null, [], "", "", !0, this.parent.lineNum.text);
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
				pal.grp.rightPart.editText.addEventListener('mouseout', function () {
					this.backupSelection = this.textselection;
				});
				// pal.grp.rightPart.editText.addEventListener('keydown', function (k) {
				// 	if(k.keyName==="Enter")triggerMarker(pal, null, null, null, null, [])
				// 	fixList(pal.grp.leftPart.listArea)
				// });
				// if (-1 != $.os.indexOf("Win")) {
				// 	pal.grp.rightPart.editText.onChange = function () {
				// 		triggerMarker(pal, null, null, null, null, []);
				// 	};
				// } else {
				pal.grp.rightPart.editText.onChange = function () {
					triggerMarker(pal, null, null, null, null, []);
				};
				pal.grp.rightPart.editText.onChanging = function () {
					triggerMarker(pal, null, null, null, null, []);
				};
				// };

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

				pal.grp.rightPart.btGroup.bbt.bButton.onClick = function () {
					runCommand(pal, "b");
				};
				pal.grp.rightPart.btGroup.bbt.bsButton.onClick = function () {
					runCommand(pal, "/b");
				};
				pal.grp.rightPart.btGroup.ibt.iButton.onClick = function () {
					runCommand(pal, "i");
				};
				pal.grp.rightPart.btGroup.ibt.isButton.onClick = function () {
					runCommand(pal, "/i");
				};
				pal.grp.rightPart.btGroup.ubt.uButton.onClick = function () {
					runCommand(pal, "u");
				};
				pal.grp.rightPart.btGroup.ubt.usButton.onClick = function () {
					runCommand(pal, "/u");
				};
				pal.grp.rightPart.btGroup.sbt.sButton.onClick = function () {
					runCommand(pal, "s");
				};
				pal.grp.rightPart.btGroup.sbt.ssButton.onClick = function () {
					runCommand(pal, "/s");
				};
				pal.grp.rightPart.btGroup.bbt.bbButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "b", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.ibt.iiButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "i", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.sbt.sssButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "s", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.ubt.uuButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "u", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.fbt.fsButton.onClick = function () {
					var keyString = " size=" + this.parent.fsValue.text;
					triggerMarker(pal, null, null, null, null, [], "font", keyString, !1, pal.grp.leftPart.buttonArea.lineNum.text)
				};
				pal.grp.rightPart.btGroup.fbt.fcButton.onClick = function () {
					var keyString = " color=" + fixBlueHex(this.parent.fcValue.colorHex);
					triggerMarker(pal, null, null, null, null, [], "font", keyString, !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.fbt.fcValue.onDraw = function () {
					this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
					this.graphics.fillPath(this.fillBrush);
				};
				pal.grp.rightPart.btGroup.fbt.fcValue.onClick = function () {
					var origin = this.colorHex;
					var colorString = $.colorPicker();
					this.colorHex = colorString == -1 ? origin : colorString.toString(16).toUpperCase();
					// this.parent.fcButton.text = "<font color=" + fixBlueHex(this.colorHex) + ">";
					this.fillBrush = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, hexToRgb(this.colorHex));
				};

				pal.grp.rightPart.btGroup.midGroup.position.bobt.blButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an3}", "{\\pos(0,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an1}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.bobt.bcButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an6}", "{\\pos(192,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an2}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.bobt.brButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an9}", "{\\pos(384,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an3}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mlButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an2}", "{\\pos(0,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an4}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mcButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an5}", "{\\pos(192,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an5}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mrButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an8}", "{\\pos(384,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an6}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ulButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an1}", "{\\pos(0,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an7}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ucButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an4}", "{\\pos(192,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an8}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.upbt.urButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an7}", "{\\pos(384,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an9}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posButton.onClick = function () {
					var px = this.parent.posX.text,
						py = this.parent.posY.text;

					triggerMarker(pal, null, "{\\pos(" + px + "," + py + ")}", null, null, [], null, null, !1, null, true);

				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.onClick = function () {
					var fIn = this.parent.fadIn.text,
						fOut = this.parent.fadOut.text;
					triggerMarker(pal, null, null, null, "{\\fad(" + fIn + "," + fOut + ")}", [], null, null, !1, null, true);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bord.onClick = function () {
					var bordVar = "{\\bord(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [bordVar], null, null, !1, null, true);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.metri.onClick = function () {
					var fspVar = "{\\fsp(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [, fspVar], null, null, !1, null, true);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.blur.onClick = function () {
					var blurVar = "{\\be(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [, , blurVar], null, null, !1, null, true);
				};
				pal.grp.rightPart.btGroup.fix.move.moveButton.onClick = function () {
					var x1 = this.parent.x1.text,
						y1 = this.parent.y1.text,
						x2 = this.parent.x2.text,
						y2 = this.parent.y2.text,
						moveIn = this.parent.moveIn.text,
						moveOut = this.parent.moveOut.text,
						moveVar = "{\\move(" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + moveIn + "," + moveOut + ")}";
					triggerMarker(pal, null, null, null, null, [, , , moveVar], null, null, !1, null, true)
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bfbVal.onChange = function () {
					this.text = validNum(this.text, 2);
					// this.parent.bord.text = "{\\bord(" + this.text + ")}";
					// this.parent.metri.text = "{\\fsp(" + this.text + ")}";
					// this.parent.blur.text = "{\\be(" + this.text + ")}";
				};
				pal.grp.rightPart.btGroup.fbt.fsValue.onChange = function () {
					this.text = validNum(this.text, 20);
					// this.parent.fsButton.text = "<font size=" + this.text + ">";
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posX.onChange = function () {
					this.text = validNum(this.text, 192);
					// this.parent.posButton.text = "{\\pos(" + this.text + "," + this.parent.posY.text + ")}";
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posY.onChange = function () {
					this.text = validNum(this.text, 144);
					// this.parent.posButton.text = "{\\pos(" + this.parent.posX.text + "," + this.text + ")}";
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadIn.onChange = function () {
					this.text = validNum(this.text, 300, this.text < 0);
					// this.parent.fadButton.text = "{\\fad(" + this.text + "," + this.parent.fadOut.text + ")}";
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadOut.onChange = function () {
					this.text = validNum(this.text, 300, this.text < 0);
					// this.parent.fadButton.text = "{\\fad(" + this.parent.fadIn.text + "," + this.text + ")}";
				};
				pal.grp.rightPart.btGroup.fix.move.x1.onChange = function () {
					this.text = validNum(this.text, 384);
				};
				pal.grp.rightPart.btGroup.fix.move.y1.onChange = function () {
					this.text = validNum(this.text, 144);
				};
				pal.grp.rightPart.btGroup.fix.move.x2.onChange = function () {
					this.text = validNum(this.text, -50);
				};
				pal.grp.rightPart.btGroup.fix.move.y2.onChange = function () {
					this.text = validNum(this.text, -144);
				};
				pal.grp.rightPart.btGroup.fix.move.moveIn.onChange = function () {
					this.text = validNum(this.text, 0, this.text < 0);
				};
				pal.grp.rightPart.btGroup.fix.move.moveOut.onChange = function () {
					this.text = validNum(this.text, 3000, this.text < 0);
				};
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.onClick = function () {
					pal.grp.rightPart.editText.text = "";
					refreshButton(pal);
					fixList(pal.grp.leftPart.listArea);
				};
				pal.grp.rightPart.btGroup.rebtGroup.epButton.onClick = function () {
					writeSrt(pal.grp.leftPart.listArea.items);
				};
				pal.grp.leftPart.buttonArea.olGroup.olImage.image = ScriptUI.newImage(olmg);
				pal.grp.rightPart.btGroup.fix.direct.verticalImg.image = ScriptUI.newImage(vemg);


				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bord.helpTip = es_str.bordHelp;
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.metri.helpTip = es_str.metriHelp;
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.blur.helpTip = es_str.blurHelp;
				pal.grp.rightPart.btGroup.fix.direct.vertical.helpTip = es_str.verticalHelp;
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posButton.helpTip = es_str.posHelp;
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posX.helpTip = es_str.srtXY
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posY.helpTip = es_str.srtXY
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.helpTip = es_str.fadHelp;
				pal.grp.rightPart.btGroup.fix.move.moveButton.helpTip = es_str.mvHelp;
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.helpTip = es_str.rfHelp;
				pal.grp.rightPart.btGroup.rebtGroup.epButton.helpTip = es_str.epHelp;
				pal.grp.rightPart.btGroup.fbt.fcButton.helpTip = es_str.fcHelp;
				pal.grp.rightPart.btGroup.bbt.bbButton.helpTip = es_str.bbHelp;
				pal.grp.rightPart.btGroup.ibt.iiButton.helpTip = es_str.iiHelp;
				pal.grp.rightPart.btGroup.sbt.sssButton.helpTip = es_str.sssHelp;
				pal.grp.rightPart.btGroup.ubt.uuButton.helpTip = es_str.uuHelp;
				pal.grp.rightPart.btGroup.fbt.fsButton.helpTip = es_str.fsHelp;
				pal.grp.rightPart.btGroup.fbt.fcValue.helpTip = es_str.fcvalueHelp;

				pal.grp.leftPart.buttonArea.info.helpTip = es_str.infoHelp;
				pal.grp.leftPart.buttonArea.resel.helpTip = es_str.reselHelp;
				pal.grp.leftPart.buttonArea.pickPos.helpTip = es_str.pickposHelp;
				pal.grp.leftPart.buttonArea.killOther.helpTip = es_str.killotherHelp;
				pal.grp.leftPart.buttonArea.killTag.helpTip = es_str.killtagHelp;
				pal.grp.leftPart.buttonArea.rmMarker.helpTip = es_str.rmmarkHelp;
				pal.grp.leftPart.buttonArea.preci.helpTip = es_str.preciHelp;
				pal.grp.leftPart.buttonArea.lineNum.helpTip = es_str.linenumHelp;
				pal.grp.leftPart.buttonArea.olGroup.olCheck.helpTip = es_str.olcheckHelp;
				pal.grp.rightPart.btGroup.fix.move.x1.helpTip = es_str.srtXY;
				pal.grp.rightPart.btGroup.fix.move.y1.helpTip = es_str.srtXY;
				pal.grp.rightPart.btGroup.fix.move.x2.helpTip = es_str.srtXY;
				pal.grp.rightPart.btGroup.fix.move.y2.helpTip = es_str.srtXY;
				pal.grp.rightPart.btGroup.fix.move.moveIn.helpTip = es_str.msHelp;
				pal.grp.rightPart.btGroup.fix.move.moveOut.helpTip = es_str.msHelp;
				pal.grp.rightPart.btGroup.bbt.bButton.helpTip = es_str.bHelp;
				pal.grp.rightPart.btGroup.ibt.iButton.helpTip = es_str.iHelp;
				pal.grp.rightPart.btGroup.ubt.uButton.helpTip = es_str.uHelp;
				pal.grp.rightPart.btGroup.sbt.sButton.helpTip = es_str.sHelp;
				pal.grp.rightPart.btGroup.bbt.bsButton.helpTip = es_str.bsHelp;
				pal.grp.rightPart.btGroup.ibt.isButton.helpTip = es_str.isHelp;
				pal.grp.rightPart.btGroup.ubt.usButton.helpTip = es_str.usHelp;
				pal.grp.rightPart.btGroup.sbt.ssButton.helpTip = es_str.ssHelp;

				pal.grp.rightPart.btGroup.midGroup.position.bobt.blButton.helpTip = es_str.blHelp;
				pal.grp.rightPart.btGroup.midGroup.position.bobt.bcButton.helpTip = es_str.bcHelp;
				pal.grp.rightPart.btGroup.midGroup.position.bobt.brButton.helpTip = es_str.brHelp;
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mlButton.helpTip = es_str.mlHelp;
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mcButton.helpTip = es_str.mcHelp;
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mrButton.helpTip = es_str.mrHelp;
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ulButton.helpTip = es_str.ulHelp;
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ucButton.helpTip = es_str.ucHelp;
				pal.grp.rightPart.btGroup.midGroup.position.upbt.urButton.helpTip = es_str.urHelp;

				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadIn.helpTip = es_str.msHelp
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadOut.helpTip = es_str.msHelp

				pal.grp.leftPart.buttonArea.pickPos.image = ScriptUI.newImage(pimg)
				pal.grp.leftPart.buttonArea.rmMarker.image = ScriptUI.newImage(cimg)
				pal.grp.leftPart.buttonArea.resel.image = ScriptUI.newImage(dimg)
				pal.grp.leftPart.buttonArea.killTag.image = ScriptUI.newImage(eimg)
				pal.grp.leftPart.buttonArea.killOther.image = ScriptUI.newImage(fimg)
				pal.grp.leftPart.buttonArea.info.image = ScriptUI.newImage(gimg)
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.image = ScriptUI.newImage(himg)
				pal.grp.rightPart.btGroup.rebtGroup.epButton.image = ScriptUI.newImage(iimg)
				pal.grp.rightPart.btGroup.midGroup.position.bobt.blButton.image = ScriptUI.newImage(zzmg)
				pal.grp.rightPart.btGroup.midGroup.position.bobt.bcButton.image = ScriptUI.newImage(ssmg)
				pal.grp.rightPart.btGroup.midGroup.position.bobt.brButton.image = ScriptUI.newImage(ccmg)
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mlButton.image = ScriptUI.newImage(aamg)
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mcButton.image = ScriptUI.newImage(xxmg)
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mrButton.image = ScriptUI.newImage(ddmg)
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ulButton.image = ScriptUI.newImage(qqmg)
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ucButton.image = ScriptUI.newImage(wwmg)
				pal.grp.rightPart.btGroup.midGroup.position.upbt.urButton.image = ScriptUI.newImage(eemg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posButton.image = ScriptUI.newImage(posmg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.image = ScriptUI.newImage(fadmg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bord.image = ScriptUI.newImage(bordmg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.metri.image = ScriptUI.newImage(fspmg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.blur.image = ScriptUI.newImage(bemg)
				pal.grp.rightPart.btGroup.fix.move.moveButton.image = ScriptUI.newImage(movemg)
				pal.grp.rightPart.btGroup.fbt.fsButton.image = ScriptUI.newImage(fsmg)
				pal.grp.rightPart.btGroup.fbt.fcButton.image = ScriptUI.newImage(fcmg)
				pal.grp.rightPart.btGroup.bbt.bButton.image = ScriptUI.newImage(b1mg)
				pal.grp.rightPart.btGroup.bbt.bsButton.image = ScriptUI.newImage(bs1mg)
				pal.grp.rightPart.btGroup.bbt.bbButton.image = ScriptUI.newImage(bb1mg)
				pal.grp.rightPart.btGroup.sbt.sButton.image = ScriptUI.newImage(s1mg)
				pal.grp.rightPart.btGroup.sbt.ssButton.image = ScriptUI.newImage(ss1mg)
				pal.grp.rightPart.btGroup.sbt.sssButton.image = ScriptUI.newImage(sss1mg)
				pal.grp.rightPart.btGroup.ibt.iButton.image = ScriptUI.newImage(i1mg)
				pal.grp.rightPart.btGroup.ibt.isButton.image = ScriptUI.newImage(is1mg)
				pal.grp.rightPart.btGroup.ibt.iiButton.image = ScriptUI.newImage(ii1mg)
				pal.grp.rightPart.btGroup.ubt.uButton.image = ScriptUI.newImage(u1mg)
				pal.grp.rightPart.btGroup.ubt.usButton.image = ScriptUI.newImage(us1mg)
				pal.grp.rightPart.btGroup.ubt.uuButton.image = ScriptUI.newImage(uu1mg)
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
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.notify("onClick");
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

		function triggerMarker(pal, poVar, posVar, orientVar, fadeVar, otherVar, key, arg, remove, lineNum, poDef) {
			app.beginUndoGroup(es_str.title);
			for (var i = 0; i < pal.grp.leftPart.listArea.selection.length; i++) {
				var listIndex = pal.grp.leftPart.listArea.selection[i].index,
					esMarker = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true),
					markComment = (key == null && poVar == null && posVar == null && orientVar == null && fadeVar == null && otherVar.length == 0) ?
					String(pal.grp.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) :
					(remove ?
						removeQuote(esMarker.comment, newlineMark, lineNum) :
						quoteText(esMarker.comment.replace(/\n|\r/gm, newlineMark), newlineMark, lineNum, pal.grp.rightPart.editText.backupSelection, key, arg)),
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
				pal.grp.rightPart.editText.text = esMarker2.comment.replace(reg, "\r");
			}
			app.endUndoGroup();
			fixList(pal.grp.leftPart.listArea);
		}

		function runCommand(pal, arg) {
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
			//pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);
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

		function removeQuote(comment, splitor, lineNum) {
			var reg = /(<\/?(\s|\S)*?>)/g;
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
					pal.grp.rightPart.editText.backupSelection = "",
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
			for (var x = 0; x < pal.grp.rightPart.btGroup.children.length - 1; x++) {
				pal.grp.rightPart.btGroup.children[x].enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0
				pal.grp.rightPart.btGroup.fbt.fcValue.fillBrush = 0 == pal.grp.leftPart.listArea.items.length ? pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, disableGreen, 1) : pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, bgGreen, 1);
				pal.grp.rightPart.btGroup.fix.direct.verticalImg.image = 0 == pal.grp.leftPart.listArea.items.length ? ScriptUI.newImage(vemg1) : ScriptUI.newImage(vemg);
				pal.grp.rightPart.btGroup.fbt.fcValue.notify("onDraw")
			};
			pal.grp.rightPart.editText.enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
			pal.grp.rightPart.btGroup.rebtGroup.epButton.enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
			// var vemg = File("/Users/meng/Documents/vemg.png"),
			// 	vemg1 = File("/Users/meng/Documents/vemg1.png");



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