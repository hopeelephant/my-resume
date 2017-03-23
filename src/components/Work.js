import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Work extends React.Component {
    constructor() {
        super();
        this.state = {
            productDate: []
        }
    }
    componentDidMount() {
        axios.get("https://github.com/hopeelephant/my-resume/blob/master/blog/work.json").then(res => this.setState({productDate: res.productDate}));
    }
    render() {
        return (
            <div className="production">
                <section className="work">
                    {this.state.productDate.length == 0
                        ? "请稍后" : this.state.productDate.map((item) => (
                            <figure className="product" key={Math.random()}>
                                <h4>{item.title}</h4>
                                <a href={`https://hopeelephant.github.io/${item.demoAddress}`}>
                                  <img src={`https://hopeelephant.github.io/my-resume/src/components/images/${item.imgName}.png`} alt={item.imgName}/>
                                </a>

                                <figcaption>{item.desc}</figcaption>
                            </figure>
                        ))
                    }
                </section>
            </div>
        )
    }
}

export default Work;
