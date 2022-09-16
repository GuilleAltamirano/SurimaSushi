import Iframe from 'react-iframe';

export const IframeComponent = () => {
    const iframe = ["https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.314789902819!2d-64.2205756!3d-31.3843935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a5da3223a095987!2sShurima%20Sushi%20%26%20Wok!5e0!3m2!1ses-419!2sar!4v1663183126977!5m2!1ses-419!2sar"]
    const stylesIframe = {
        width: '400',
        height: '300',
        style: 'border:0',
        loading: 'lazy',
        allowfullscreen: '',
        referrerpolicy: 'no-referrer-when-downgrade',
    }
    return(
        <>
            <iframe src={iframe} key={stylesIframe} style={stylesIframe}></iframe>
        </>

    )
}