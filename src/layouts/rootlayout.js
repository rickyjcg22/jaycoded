import Header from './header';
import Footer from './footer';
import Content from './content';
import { Outlet } from 'react-router-dom';


const RootLayout = () =>{

    return(
        <div className="root-main">
          
          <Header></Header>  

            <Content>
            </Content><Outlet />
            
          <Footer></Footer>
          
        </div>
    )
}

export default RootLayout