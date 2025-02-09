export default function Footer() {
  return (
    <footer className="bg-slate-200 text-white mt-auto ">
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-xl text-gray-800 font-bold mb-4 ">About Us</h1>
            <p className="text-gray-800">Décoration unique pour sublimer chaque coin de votre maison </p>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-4 text-gray-800">Quick links</h1>
            <ul className="space-y-2">
              <li> <a href="https://www.facebook.com/DECO.MH.dz" target="_blank" rel="noopener noreferrer " className="hover:text-green-400 transition-all duration-200 text-lg hover:no-underline text-gray-800">facebook</a> </li>
              <li> <a href="https://www.instagram.com/md_.decoration/" target="_blank" rel="noopener noreferrer " className="hover:text-green-400 transition-all duration-200 text-lghover:no-underline text-gray-800">instagram</a> </li>
              <li> <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer " className="hover:text-green-400 transition-all duration-200 text-lg hover:no-underline text-gray-800">tiktok</a> </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 text-gray-800">Contact</h1>
            <p className="text-gray-800">Email:MD.decoration@gmail.com</p>
            <p className="text-gray-800">Phone:0555555555</p>
          </div>
        </div>

        <div className="mt-6 border-t border-green-700 pt-8 text-center">
          <p className="text-gray-800">MD.Decoration 2025 @copyright.all rights</p>
        </div>

      </div>
    </footer>
  )
}