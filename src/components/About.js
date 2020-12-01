import React from 'react';
import ToTop from './ToTop';
import ImgFace from '../img/img_face.jpg';
import '../css/About.css';

const About = () => {
    return (
        <React.Fragment>
            <section className="contBox cf">
                <h2 className="ttl large">About</h2>
                <p className="txtBox">
                    大阪にてフリーランスのWeb制作をしております。
                    <br />
                    2006年よりアルバイトにて制作を始める。
                    <br />
                    2007年から5年間大阪市内の制作会社でデザイン・コーディングなどの業務を行う。
                    <br />
                    2012年よりフリーランスへ転向。
                </p>
                <div className="fBox01 cf">
                    <p className="imgFace fBoxLeft">
                        <img src={ImgFace} alt="" />
                    </p>
                    <div className="fBoxRight">
                        <dl class="companyProf cf">
                            <dt>名称 ：</dt><dd>UNDERLINE （アンダーライン）</dd>
                            <dt>所在地 ：</dt><dd>大阪市内</dd>
                            <dt>お問い合わせ ：</dt><dd>tokuda@u-d-l.jp</dd>
                            <dt>事業内容 ：</dt><dd>Web制作におけるディレクション、デザイン、HTML・CSSコーディング、スマートフォンサイト、CMS導入等</dd>
                        </dl>
                        <h2>徳田 優一　Tokuda Yuichi</h2>
                        <dl class="companyProf cf">
                            <dt>Facebook:</dt><dd><a href="https://www.facebook.com/yuichi.tokuda.5" rel="noreferrer noopener">yuichi.tokuda.5</a></dd>
                            <dt>Instagram:</dt><dd><a href="http://instagram.com/underline_t" rel="noreferrer noopener">underline_t</a></dd>
                        </dl>
                    </div>
                </div>
            </section>
            <ToTop />
        </React.Fragment>
    )
}

export default About;