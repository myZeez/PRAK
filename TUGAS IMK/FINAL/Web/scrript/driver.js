const Driver = window.driver.js.driver;
      
const driver = Driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
        {element: '#logo', popover: {title: 'Apa itu MyAlbum?', description: 'MyAlbum adalah sebuah website dengan prioritas tinggi untuk mengabadikan moment anda melalui teknologi Cloud', side: 'right', align:'start'}},
        {element: '#search', popover: {title: 'Pencarian', description: 'Cari moment terbaik mu menggunakan fitur ini!', side: 'bottom', align:'start'}},
        {element: '#logout', popover: {title: 'Logout', description: 'Keluar dari akun', side: 'bottom', align:'start'}},        
        {element: '#all', popover: {title: 'Menu utama', description: 'Untuk melihat semua media yang kamu unggah ke sistem MyAlbum', side: 'right', align:'start'}},
        {element: '#daftarMenu', popover: {title: 'Telusuri menu', description: 'Telusuri menu-menu yang disediakan oleh website kami untuk anda dengan sepenuh hati', side: 'right', align:'start'}},
        {element: '#storage', popover: {title: 'Sisa penyimpanan', description: 'Sisa penyimpanan mu yang masih tersisa berdasarkan jenis langganan mu', side: 'right', align:'start'}},
        {element: '#premium', popover: {title: 'Coba Premium!', description: 'Coba premium untuk meningkatkan kapasitas penyimpanan mu!', side: 'right', align:'start'}},
        {element: '#upload', popover: {title: 'Upload moment mu!', description: 'Abadikan moment mu dengan mengunggahnya ke website kami', side: 'left', align:'start'}},
        {element: '#content', popover: {title: 'Kenang moment mu disini', description: ':)', side: 'top', align:'center'}},
        {popover: { title: 'Selamat mencoba!', description: 'Terima kasih telah mengunjungi website kami semoga anda suka ' } }
    ]
});

driver.drive();