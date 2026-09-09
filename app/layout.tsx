import './globals.css'
import type {Metadata} from 'next'
export const metadata:Metadata={title:'Ashutosh Dubey — Developer',description:'Interactive portfolio of Ashutosh Dubey.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
