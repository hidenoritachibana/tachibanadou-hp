/**
 * 企業概要
 */
const CompanyProfile = () => (
    <>

        {/* 企業概要 Section */}
        <section className="py-14 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">企業概要</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold w-40 text-gray-700">社　　名</th>
                            <td className="py-3 px-4">株式会社　立花堂</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold text-gray-700">設　　立</th>
                            <td className="py-3 px-4">2025年 4月 1日</td>
                        </tr>
                        <tr>
                            <th className="py-3 px-4 font-semibold text-gray-700">事業内容</th>
                            <td className="py-3 px-4 border-b">アプリケーションの企画、制作、運営</td>
                        </tr>
                        <tr>
                            <th className="py-3 px-4 font-semibold text-gray-700"></th>
                            <td className="py-3 px-4 border-b">ソフトウェアのライセンス販売、SaaS事業</td>
                        </tr>
                        <tr>
                            <th className="py-3 px-4 font-semibold text-gray-700"></th>
                            <td className="py-3 px-4 border-b">人材育成、教育研修、講師事業</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold text-gray-700"></th>
                            <td className="py-3 px-4">各種コンサルディング事業</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold text-gray-700">本　　社</th>
                            <td className="py-3 px-4">大阪府大阪市北区梅田 1丁目2番2号 大阪駅前第2ビル 12-12</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold text-gray-700">代　　表</th>
                            <td className="py-3 px-4">代表取締役社長　立花　秀徳</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    </>

);

export default CompanyProfile;