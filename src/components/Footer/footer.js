import React from 'react';
import SnapChatLogo from "../Images/snapimg.png";
import InstgImg from "../Images/instaimg.png";

const Footer = () => {
    return (
        <>
            <div className="topLayOut">
                <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td className="layOut">
                                <div align="center">
                                    <div className="img-container">
                                        <table border="0" cellSpacing="0" cellPadding="0" width="32" height="32" className="imgSocial">
                                            <tbody>
                                                <tr>
                                                    <td valign="middle">
                                                        <a href="https://www.instagram.com/spicycupz/" title="Instagram" target="_blank">
                                                            <img src={InstgImg} alt="Instagram" title="Instagram" width="32" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table border="0" cellSpacing="0" cellPadding="0" width="32" height="32" className="imgSocial">
                                            <tbody>
                                                <tr>
                                                    <td valign="middle">
                                                        <a href="https://t.snapchat.com/zRrTrajp" title="Snapchat" target="_blank">
                                                            <img src={SnapChatLogo} alt="Snapchat" title="Snapchat" width="32" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="parLayOut">
                <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td className="v-container-padding-padding">
                                <div style={{ color: '#95a5a6', lineHeight: '180%', textAlign: 'center', wordWrap: 'break-word' }}>
                                    <p style={{ fontSize: '14px', lineHeight: '180%' }}>If you have any questions, feel free message us at <span style={{ color: '#c5b883', fontSize: '14px', lineHeight: '25.2px' }} rel="noopener" target="_blank">kajeenghazi@yahoo.com</span></p>
                                    <p style={{ fontSize: '14px', lineHeight: '180%' }}>All right reserved. Update email preferences or unsubscribe. <br />Plano, TX. United States <br /><span style={{ textDecoration: 'underline', fontSize: '14px', lineHeight: '25.2px' }}>Terms of use</span> | <span style={{ textDecoration: 'underline', fontSize: '14px', lineHeight: '25.2px' }}>Privacy Policy</span></p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td className="v-container-padding-padding">
                                <table height="0px" align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ borderCollapse: 'collapse', tableLayout: 'fixed', borderSpacing: '0', msoTableLspace: '0pt', msoTableRspace: '0pt', verticalAlign: 'top', borderTop: '1px solid #ebf6f8', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ wordBreak: 'break-word', borderCollapse: 'collapse !important', verticalAlign: 'top', fontSize: '0px', lineHeight: '0px', msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%' }}>
                                                <span>&nbsp;</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Footer;
