import React from 'react';

import SnapChatlogo from "../Images/snapimg.png"
import InstLogo from "../Images/instaimg.png"
import "../Footer/footer.css";

const Footer = () => {
    return (
        <>
            <div className="topLayOut">
                <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" border="0">
                    <tbody>
                        <tr>

                            <td  className="layOut">
                                <div align="center">
                                    <div className="img-container">
                                        <table  border="0" cellSpacing="0" cellPadding="0" className="imgSocial">
                                            <tbody>
                                                <tr>
                                                    <td  valign="middle">
                                                        <a href="https://www.instagram.com/spicycupz/" title="Instagram" target="_blank">
                                                            <img src={InstLogo} alt="Instagram" title="Instagram"  />

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

                                        <table  border="0" cellSpacing="0" cellPadding="0" className="imgSocial">
                                            <tbody>
                                                <tr>
                                                    <td  valign="middle">
                                                        <a href="https://t.snapchat.com/zRrTrajp" title="Snapchat" target="_blank">
                                                            <img src={SnapChatlogo} alt="Snapchat" title="Snapchat"  />

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

                            <td  className="v-container-padding-padding">

                            <td className="v-container-padding-padding">

                                <div style={{ color: '#95a5a6', lineHeight: '180%', textAlign: 'center', wordWrap: 'break-word' }}>
                                    <p style={{ fontSize: '14px', lineHeight: '180%' }}>If you have any questions, feel free to message us at <span style={{ color: '#c5b883', fontSize: '14px', lineHeight: '25.2px' }} rel="noopener" target="_blank">kajeenghazi@yahoo.com</span></p>
                                    <p style={{ fontSize: '14px', lineHeight: '180%' }}>All rights reserved. Update email preferences or unsubscribe. <br />Plano, TX. United States <br /><span style={{ textDecoration: 'underline', fontSize: '14px', lineHeight: '25.2px' }}>Terms of Use</span> | <span style={{ textDecoration: 'underline', fontSize: '14px', lineHeight: '25.2px' }}>Privacy Policy</span></p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" border="0">
                    <tbody>
                        <tr>

                            <td  className="v-container-padding-padding">

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
            <div className="bottomLayOut">
                <table role="presentation" cellPadding="0" cellSpacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td className="v-container-padding-padding">
                                <div style={{ color: '#95a5a6', lineHeight: '180%', textAlign: 'center', wordWrap: 'break-word' }}>
                                    <p style={{ fontSize: '12px', lineHeight: '180%' }}>You received this email because you signed up on our website or made a purchase from us. <br />If you no longer wish to receive these emails, you can <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#c5b883' }}>unsubscribe here</span>.</p>
                                    <p style={{ fontSize: '12px', lineHeight: '180%' }}>Follow us on: 
                                        <a href="https://www.facebook.com" title="Facebook" target="_blank" style={{ margin: '0 5px', color: '#3b5998' }}>Facebook</a> | 
                                        <a href="https://twitter.com" title="Twitter" target="_blank" style={{ margin: '0 5px', color: '#1DA1F2' }}>Twitter</a> | 
                                        <a href="https://www.linkedin.com" title="LinkedIn" target="_blank" style={{ margin: '0 5px', color: '#0077b5' }}>LinkedIn</a>
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Footer;
