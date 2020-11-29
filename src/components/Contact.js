import React from 'react';
import '../css/Contact.css'

const Contact = () => {
    return (
        <section className="contBox cf">
            <h2 className="ttl large">Contact</h2>
            <p className="txtBox">
                制作の依頼・ご相談などお気軽にお問い合わせくださいませ。
                <br />
                下記フォームよりわかる範囲でご記入ください。必須の項目は必ずご記入お願いします。
            </p>
            <div role="form" className="wpcf7" id="wpcf7-f147-p8-o1" lang="ja" dir="ltr">
                <div className="screen-reader-response"></div>
                <form action="/contact/#wpcf7-f147-p8-o1" method="post" className="wpcf7-form" noValidate="novalidate">
                    <dl className="contactForm">
                        <dt>貴社名</dt>
                        <dd className="w01">
                            <span className="wpcf7-form-control-wrap your-company">
                                <input type="text" name="your-company" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" />
                            </span>
                        </dd>
                        <dt>お名前<span className="required">必須</span></dt>
                        <dd className="w01">
                            <span className="wpcf7-form-control-wrap your-name">
                                <input type="text" name="your-name" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" />
                            </span>
                        </dd>
                        <dt>メールアドレス<span className="required">必須</span></dt>
                        <dd className="w01">
                            <span className="wpcf7-form-control-wrap your-email">
                                <input type="email" name="your-email" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" />
                            </span>
                        </dd>
                        <dt>電話番号</dt>
                        <dd className="w01">
                            <span className="wpcf7-form-control-wrap your-tel">
                                <input type="tel" name="your-tel" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" />
                            </span>
                        </dd>
                        <dt>お問い合わせ内容<span className="required">必須</span></dt>
                        <dd className="w02">
                            <span className="wpcf7-form-control-wrap your-message">
                                <textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" />
                            </span>
                        </dd>
                    </dl>
                    <p>
                        <input type="submit" defaultValue="内容を送信する" className="wpcf7-form-control submitBtn" />
                    </p>
                    <div className="wpcf7-response-output wpcf7-display-none"></div>
                </form>
            </div>
        </section>
    )
}

export default Contact;