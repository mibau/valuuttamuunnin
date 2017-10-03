
const {
  Button, TextView, TextInput, Picker, ScrollView, ui
} = require('tabris');

let scrollView = new ScrollView({left: 0, top: 0, right: 0, bottom: 0}).appendTo(ui.contentView);

var VALUUTTA1 = ['Euro', 'Englannin punta', 'Yhdysvaltain dollari', 'Australian dollari', 'Kanadan dollari', 'Japanin jeni', 'Ruotsin kruunu', 'Norjan kruunu', 'Tanskan kruunu', 'Venäjän rupla', 'Intian rupla'];
var VALUUTTA2 = ['Euro', 'Englannin punta', 'Yhdysvaltain dollari', 'Australian dollari', 'Kanadan dollari', 'Japanin jeni', 'Ruotsin kruunu', 'Norjan kruunu', 'Tanskan kruunu', 'Venäjän rupla', 'Intian rupla'];

scrollView.background = '#dbdbdb';

new TextView ({
  id: 'Otsikko',
  font: "24px",
  text: 'Valuuttamuunnin',
  textColor : '#8b0000'
}).appendTo(scrollView);

new TextView ({
  id: 'currLabel',
  alignment: 'left',
  text: 'Määrä'
}).appendTo(scrollView);

new TextInput({
  id: 'currInput'
}).appendTo(scrollView);


new TextView({
 	id: 'curr1Label',
	text: 'Mistä valuutasta'
}).appendTo(scrollView);

new Picker({
  id: 'curr1Picker',
  itemCount: VALUUTTA1.length,
  itemText: index => VALUUTTA1[index]
}).appendTo(scrollView);

new TextView({
  id: 'curr2Label',
  text: 'Mihin valuuttaan'
}).appendTo(scrollView);

new Picker({
  id: 'curr2Picker',
  itemCount: VALUUTTA2.length,
  itemText: index => VALUUTTA2[index]
}).appendTo(scrollView);



new Button({
  id: 'checkButton',
  text: 'Muunna valuutta',
  background: '#8b0000',
  textColor: 'white'
}).on('select', () => {
 
  updateMessage();
}).appendTo(scrollView);

let message = new TextView({
  centerX:0, top: '#checkButton 10',
  font: "24px"
}).appendTo(scrollView);

scrollView.apply({
  	'#Otsikko' : {left:120, top: 18, width: 200},
  	'#currLabel' : {left: 10, top: '#Otsikko 18', width: 120},
  	'#currInput': {left: '#currLabel', right: '10', baseline: 					'#currLabel'},
    '#curr1Label': {left: 10, top: '#currInput 18', width: 120},
    '#curr1Picker': {left: '#curr1Label 10', right: 10, baseline: 			  '#curr1Label'},
	'#curr2Label': {left: 10, top: '#curr1Label 18', width: 120},
  	'#curr2Picker': {left: '#curr2Label 10', right: 10, baseline: 					'#curr2Label'},
	'#checkButton': {left: 10, right: 10, top: '#curr2Label 18'}

});

function updateMessage() {
  
  
  // EUROISTA MUIHIN
if (VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Euro') {
    
  // Euroista euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);
    
}  // Euroista punniksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.881058).toFixed(2);
    
} // Euroista kruunuiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 9.606384).toFixed(2);
    
} // Euroista dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.180011).toFixed(2);
     
} // Euroista dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.505245).toFixed(2);
    
} // Euroista dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.473078).toFixed(2);

}// Euroista jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 132.87).toFixed(2);
    
} // Euroista Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 9.404779).toFixed(2);

}// Euroista Tanskan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 7.438917).toFixed(2);
    
}// Euroista rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 68.2498).toFixed(2);

} // Euroista intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 77.1041).toFixed(2);

	}
}
  
  // PUNNISTA MUIHIN
  if (VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Englannin punta') {
    
      // Punnista punniksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);
 
}	// Punnista euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 1.134998).toFixed(2);

}	// Punnista ruotsin kruunuiksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
  message.text = (scrollView.children('#currInput').first().text * 10.9032).toFixed(2);
   
}	// Punnista dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.33931).toFixed(2);
     
}	// Punnista dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.708451).toFixed(2);
    
}	// Punnista dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.671941).toFixed(2);

}	// Punnista jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 150.808).toFixed(2);
    
}	// Punnista Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 10.6744).toFixed(2);

}	// Punnista Tanskan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 8.443159).toFixed(2);
    
}	// Punnista rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 77.4634).toFixed(2);

}	// Punnistaa intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 87.5131).toFixed(2);
	} 
}
  
  // RUOTSIN KRUUNUISTA MUIHIN
   if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Ruotsin kruunu') {
     
      // kruunuista kruunuiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
  message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);

}	// kruunuista euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.104097).toFixed(2);

}	// kruunuista punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.0917159).toFixed(2); 
		
}	// Kruunuista dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.122836).toFixed(2);
     
}	// Kruunuista dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.156692).toFixed(2);
    
}	// Kruunuista dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.153344).toFixed(2);

}	// Kruunuista jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 13.8315).toFixed(2);
    
}	// Kruunuista Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.979013).toFixed(2);

}	// Kruunuista Tanskan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.774372).toFixed(2);
    
}	// Kruunuista rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 7.104631).toFixed(2);

}	// Punnistaa intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 8.026343).toFixed(2);
	} 
}
  
  // DOLLAREISTA (USD) MUIHIN
  if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    
    // USD euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.104097).toFixed(2);
		
}	// USD punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.746653).toFixed(2); 
		
}	// USD dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);
     
}	// USD dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.27562).toFixed(2);
    
}	// USD dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.24836).toFixed(2);

}	// USD jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 112.601).toFixed(2);
    
}	// USD Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 7.97008).toFixed(2);

}	// USD Ruotsin kruunuiksi
    if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
      message.text = (scrollView.children('#currInput').first().text * 8.14093).toFixed(2);
    
}	// USD Tanskan kruunuiksi
  	if
(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 6.30411).toFixed(2);
    
}	// USD rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 57.8383).toFixed(2);

}	// USD intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 65.3419).toFixed(2);
		} 
	}
  
    // DOLLAREISTA (AUD) MUIHIN
  if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Australian dollari') {
    
    // AUD euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.665756).toFixed(2);
		
}	// AUD punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.587976).toFixed(2); 
		
}	// AUD dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.781873).toFixed(2);
     
}	// AUD dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);
    
}	// AUD dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.977545).toFixed(2);

}	// AUD jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 88.1578).toFixed(2);
    
}	// AUD Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 6.245453).toFixed(2);

}	// AUD Ruotsin kruunuiksi
    if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
      message.text = (scrollView.children('#currInput').first().text * 6.390968).toFixed(2);
    
}	// AUD Tanskan kruunuiksi
  	if
(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 4.954698).toFixed(2);
    
}	// AUD rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 45.2808).toFixed(2);

}	// AUD intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 51.0605).toFixed(2);
		} 
	}  
  
    // DOLLAREISTA (CAD) MUIHIN
  if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Kanadan dollari') {
    
    // CAD euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.681049).toFixed(2);
		
}	// CAD punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.601482).toFixed(2); 
		
}	// CAD dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.799834).toFixed(2);
     
}	// CAD dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1.022971).toFixed(2);
    
}	// CAD dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);

}	// CAD jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 90.1828).toFixed(2);
    
}	// CAD Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 6.388919).toFixed(2);

}	// CAD Ruotsin kruunuiksi
    if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
      message.text = (scrollView.children('#currInput').first().text * 6.537776).toFixed(2);
    
}	// CAD Tanskan kruunuiksi
  	if
(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 5.068514).toFixed(2);
    
}	// CAD rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 46.3209).toFixed(2);

}	// CAD intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 52.2334).toFixed(2);
		} 
	}
    
    // JENEISTÄ MUIHIN
  if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Japanin jeni') {
    
    // JENIT euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.00755187).toFixed(2);
		
}	// JENIT punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.00666958).toFixed(2); 
		
}	// JENIT dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.00886902).toFixed(2);
     
}	// JENIT dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.0113433).toFixed(2);
    
}	// JENIT dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.0110886).toFixed(2);

}	// JENIT jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);
    
}	// JENIT Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.0708441).toFixed(2);

}	// JENIT Ruotsin kruunuiksi
    if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
      message.text = (scrollView.children('#currInput').first().text * 0.0724947).toFixed(2);
    
}	// JENIT Tanskan kruunuiksi
  	if
(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.0562026).toFixed(2);
    
}	// JENIT rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 0.513633).toFixed(2);

}	// JENIT intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 0.579194).toFixed(2);
		} 
	}
      
    // NKRUUNU MUIHIN
  if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Norjan kruunu') {
    
    // NKRUUNU euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.106598).toFixed(2);
		
}	// NKRUUNU punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.0941446).toFixed(2); 
		
}	// NKRUUNU dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.125191).toFixed(2);
     
}	// NKRUUNU dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.160116).toFixed(2);
    
}	// NKRUUNU dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.156521).toFixed(2);

}	// NKRUUNU jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 14.1155).toFixed(2);
    
}	// NKRUUNU Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);

}	// NKRUUNU Ruotsin kruunuiksi
    if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
      message.text = (scrollView.children('#currInput').first().text * 1.023299).toFixed(2);
    
}	// NKRUUNU Tanskan kruunuiksi
  	if
(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.793329).toFixed(2);
    
}	// NKRUUNU rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 7.250197).toFixed(2);

}	// NKRUUNU intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 8.17562).toFixed(2);
		} 
	}
        
    // VRUPLA MUIHIN
  if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Venäjän rupla') {
    
    // VRUPLA euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.0147028).toFixed(2);
		
}	// VRUPLA punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.0129851).toFixed(2); 
		
}	// VRUPLA dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.0172672).toFixed(2);
     
}	// VRUPLA dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.0220844).toFixed(2);
    
}	// VRUPLA dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.0215885).toFixed(2);

}	// VRUPLA jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 1.946914).toFixed(2);
    
}	// VRUPLA Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.137927).toFixed(2);

}	// VRUPLA Ruotsin kruunuiksi
    if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
      message.text = (scrollView.children('#currInput').first().text * 0.141141).toFixed(2);
    
}	// VRUPLA Tanskan kruunuiksi
  	if
(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.109422).toFixed(2);
    
}	// VRUPLA rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);

}	// VRUPLA intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 1.127641).toFixed(2);
		} 
	}
  
          
    // IRUPLA MUIHIN
  if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Intian rupla') {
    
    // IRUPLA euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.0130386).toFixed(2);
		
}	// IRUPLA punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.0115153).toFixed(2); 
		
}	// IRUPLA dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.0153127).toFixed(2);
     
}	// IRUPLA dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.0195846).toFixed(2);
    
}	// IRUPLA dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.0191448).toFixed(2);

}	// IRUPLA jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
    message.text = (scrollView.children('#currInput').first().text * 1.726537).toFixed(2);
    
}	// IRUPLA Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.122315).toFixed(2);

}	// IRUPLA Ruotsin kruunuiksi
    if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
      message.text = (scrollView.children('#currInput').first().text * 0.125165).toFixed(2);
    
}	// IRUPLA Tanskan kruunuiksi
  	if
(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 0.0970359).toFixed(2);
    
}	// IRUPLA rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 0.886807).toFixed(2);

}	// IRUPLA intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);
		} 
	}
    
          
    // TKRUUNU MUIHIN
  if(VALUUTTA1[scrollView.children('#curr1Picker').first().selectionIndex] == 'Tanskan kruunu') {
    
    // TKRUUNU euroiksi
  if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Euro') {
  message.text = (scrollView.children('#currInput').first().text * 0.134369).toFixed(2);
		
}	// TKRUUNU punniksi
 if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Englannin punta') {
  message.text = (scrollView.children('#currInput').first().text * 0.11867).toFixed(2); 
		
}	// TKRUUNU dollareiksi (USD)
   if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Yhdysvaltain dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.157804).toFixed(2);
     
}	// TKRUUNU dollareiksi (AUD)
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Australian dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.201829).toFixed(2);
    
}	// TKRUUNU dollareiksi (CAD)
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Kanadan dollari') {
    message.text = (scrollView.children('#currInput').first().text * 0.197296).toFixed(2);

}	// TKRUUNU jeneiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Japanin jeni') {
message.text = (scrollView.children('#currInput').first().text * 17.7928).toFixed(2);
    
}	// TKRUUNU Norjan kruunuiksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Norjan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 1.260511).toFixed(2);

}	// TKRUUNU Ruotsin kruunuiksi
    if (VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Ruotsin kruunu') {
      message.text = (scrollView.children('#currInput').first().text * 1.28988).toFixed(2);
    
}	// TKRUUNU Tanskan kruunuiksi
  	if
(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Tanskan kruunu') {
    message.text = (scrollView.children('#currInput').first().text * 1).toFixed(2);
    
}	// TKRUUNU rupliksi
if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Venäjän rupla') {
    message.text = (scrollView.children('#currInput').first().text * 9.138956).toFixed(2);

}	// TKRUUNU intian rupliksi
  if(VALUUTTA2[scrollView.children('#curr2Picker').first().selectionIndex] == 'Intian rupla') {
    message.text = (scrollView.children('#currInput').first().text * 10.3055).toFixed(2);
		} 
	}
}
      
      
      