import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Cuadro from './Cuadro';
import Footer from './Footer';
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
            </div>
            <Cuadro />
            <Footer />
        </div>
    )
}
export default ContentWrapper;