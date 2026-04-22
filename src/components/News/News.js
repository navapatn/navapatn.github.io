import React from "react";
import "./News.css";
import { NEWS } from "../../Util/data";

const News = ({ newsData }) => {
  return (
    <section id="news">
      <h1>
        <span role="img" aria-label="news">
          📰
        </span>{" "}
        Latest News
      </h1>
      <div className="news-table-wrap">
        <table className="news-table">
          <tbody>
            {NEWS.map((item, index) => (
              <tr key={index} className="news-row">
                <th scope="row" className="news-date">
                  {item.date}
                </th>
                <td className="news-content" dangerouslySetInnerHTML={{ __html: item.content }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default News;
