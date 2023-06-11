tailwind.config = {
  theme: {
    extend: {
      screens: {
        'sm': '640px',       
        'md': '768px',        
        'lg': '1024px',   
        'xl': '1280px',        
        '2xl': '1536px',
      },
      colors: {
        mainColor: '#60B301',
        bdBox:'#78c225',
        timKiem: '#BDBDBD',
        textColor: '#464646',
        btn: '#F2F2F2',
        productText: '#AEA2A2',
        productTitle: '#3A3A3A',
        bdImg: '#E0E0E0',
        textKM: '#4B4B4B',
        textBG: 'rgba(196, 196, 196, 0.51)',
        footerBG: '#353535',
        hvFooter: '#CAD3C8',
        bgCart: '#fff'
      },
      backgroundImage: {
        'banner1': "url('./images/banner1.jpg')",
        'banner2': "url('./images/banner2.jpg')",
        'banner3': "url('./images/banner3.jpg')",
        'bannerKM': "url('./images/item5.jpg')",
        'bannerMain': "url('./images/bannerMain.png')",
      },
      boxShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '4xl': '0px 1px 1px rgba(0, 0, 0, 0.25)'
      },
    }
  }
}