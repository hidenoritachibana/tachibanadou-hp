/**
 * お問合せ画面コンポーネント
 */
import { useState } from "react";
import { Send } from "lucide-react";
import { Reveal, PageHeader } from "../components/ui.tsx";

const inputClass =
  "w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 transition focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white">
            <PageHeader
                en="Contact"
                ja="お問い合わせ"
                lead="ご質問・ご相談などございましたら、下記フォームよりお気軽にお問い合わせください。"
            />

            <section className="py-20 md:py-24">
                <div className="max-w-2xl mx-auto px-6">
                    {submitted ? (
                        <p className="text-green-600 text-center font-medium">送信が完了しました。</p>
                    ) : (
                        <Reveal>
                            <form
                                action="https://formspree.io/f/mdkzeqad"
                                method="POST"
                                className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 space-y-7"
                            >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-ink">
                                        お名前 <span className="text-brand-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="山田 太郎"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-ink">
                                        メールアドレス <span className="text-brand-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="example@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-semibold text-ink">
                                        お問い合わせ内容 <span className="text-brand-600">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        rows={6}
                                        placeholder="お問い合わせ内容をご記入ください"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full inline-flex items-center justify-center gap-2 bg-ink hover:bg-brand-600 text-white font-semibold px-6 py-4 rounded-full transition-colors"
                                >
                                    送信する
                                    <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </form>
                        </Reveal>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
