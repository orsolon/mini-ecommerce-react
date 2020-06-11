import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

// const [produto, setProduto] = useState([]);


//     useEffect(async () => {
//       const response = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog');
//       const data = await response.json();
//       const [produto] = data.results;
//     });


function ListarProdutos(props) {


    const produtos = [
      {"name":"VESTIDO TRANSPASSE BOW","style":"20002605",
        "code_color":"20002605_613","color_slug":"tapecaria","color":"TAPEÇARIA",
        "on_sale":false,"regular_price":"R$ 199,90","actual_price":"R$ 199,90","discount_percentage":"",
        "installments":"3x R$ 66,63","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
        "sizes":[{"available":false,"size":"PP","sku":"5807_343_0_PP"},{"available":true,"size":"P","sku":"5807_343_0_P"},{"available":true,"size":"M","sku":"5807_343_0_M"},
        {"available":true,"size":"G","sku":"5807_343_0_G"},{"available":false,"size":"GG","sku":"5807_343_0_GG"}]},
      {"name":"REGATA ALCINHA FOLK","style":"20002570",
        "code_color":"20002570_614","color_slug":"preto","color":"PRETO",
        "on_sale":false,"regular_price":"R$ 99,90","actual_price":"R$ 99,90","discount_percentage":"",
        "installments":"3x R$ 33,30","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg",
        "sizes":[{"available":true,"size":"PP","sku":"5723_40130843_0_PP"},{"available":true,"size":"P","sku":"5723_40130843_0_P"},{"available":true,"size":"M","sku":"5723_40130843_0_M"},
        {"available":true,"size":"G","sku":"5723_40130843_0_G"},{"available":true,"size":"GG","sku":"5723_40130843_0_GG"}]},
      {"name":"TOP CROPPED SUEDE","style":"20002575",
        "code_color":"20002575_035","color_slug":"caramelo","color":"CARAMELO",
        "on_sale":false,"regular_price":"R$ 129,90","actual_price":"R$ 129,90","discount_percentage":"",
        "installments":"3x R$ 43,30","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20002575_027_catalog_1.jpg","sizes":[{"available":false,"size":"PP","sku":"5733_1000054_0_PP"},
        {"available":true,"size":"P","sku":"5733_1000054_0_P"},{"available":true,"size":"M","sku":"5733_1000054_0_M"},{"available":true,"size":"G","sku":"5733_1000054_0_G"},{"available":false,"size":"GG","sku":"5733_1000054_0_GG"}]},
      {"name":"BATA DECOTE FLUID","style":"20002581",
        "code_color":"20002581_614","color_slug":"mini-folk","color":"MINI FOLK",
        "on_sale":false,"regular_price":"R$ 149,90","actual_price":"R$ 149,90","discount_percentage":"",
        "installments":"3x R$ 49,97","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20002581_614_catalog_1.jpg","sizes":[{"available":false,"size":"PP","sku":"5749_341_0_PP"},{"available":true,"size":"P","sku":"5749_341_0_P"},
        {"available":false,"size":"M","sku":"5749_341_0_M"},{"available":true,"size":"G","sku":"5749_341_0_G"},{"available":true,"size":"GG","sku":"5749_341_0_GG"}]},
      {"name":"BATA DECOTE FLUID","style":"20002581","code_color":"20002581_612","color_slug":"bohemian-preto","color":"BOHEMIAN PRETO","on_sale":false,"regular_price":"R$ 149,90","actual_price":"R$ 149,90","discount_percentage":"","installments":"3x R$ 49,97","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20002581_611_catalog_1.jpg","sizes":[{"available":false,"size":"PP","sku":"5749_333_0_PP"},{"available":true,"size":"P","sku":"5749_333_0_P"},{"available":true,"size":"M","sku":"5749_333_0_M"},{"available":true,"size":"G","sku":"5749_333_0_G"},{"available":false,"size":"GG","sku":"5749_333_0_GG"}]},{"name":"VESTIDO FRANZIDO RECORTES","style":"20001609","code_color":"20001609_029","color_slug":"preto","color":"PRETO","on_sale":true,"regular_price":"R$ 139,90","actual_price":"R$ 69,90","discount_percentage":"50%","installments":"2x R$ 34,95","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20001609_002_catalog_1.jpg","sizes":[{"available":true,"size":"PP","sku":"3627_40130843_0_PP"},{"available":true,"size":"P","sku":"3627_40130843_0_P"},{"available":true,"size":"M","sku":"3627_40130843_0_M"},{"available":false,"size":"G","sku":"3627_40130843_0_G"},{"available":false,"size":"GG","sku":"3627_40130843_0_GG"}]},{"name":"CALÇA COMFORT TASSEL","style":"20001786","code_color":"20001786_594","color_slug":"paisley-gipsy-azul","color":"PAISLEY GIPSY AZUL","on_sale":true,"regular_price":"R$ 139,90","actual_price":"R$ 84,90","discount_percentage":"39%","installments":"2x R$ 42,45","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20001786_594_catalog_1.jpg","sizes":[{"available":true,"size":"36","sku":"4029_259_0_36"},{"available":true,"size":"38","sku":"4029_259_0_38"},{"available":true,"size":"40","sku":"4029_259_0_40"},{"available":true,"size":"42","sku":"4029_259_0_42"},{"available":false,"size":"44","sku":"4029_259_0_44"}]},{"name":"SAIA DENIM BOTÕES","style":"20001695","code_color":"20001695_063","color_slug":"indigo-escuro","color":"INDIGO ESCURO","on_sale":true,"regular_price":"R$ 139,90","actual_price":"R$ 69,90","discount_percentage":"50%","installments":"2x R$ 34,95","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20001695_063_catalog_1.jpg","sizes":[{"available":false,"size":"36","sku":"3787_233_0_36"},{"available":true,"size":"38","sku":"3787_233_0_38"},{"available":true,"size":"40","sku":"3787_233_0_40"},{"available":true,"size":"42","sku":"3787_233_0_42"},{"available":false,"size":"44","sku":"3787_233_0_44"}]},{"name":"BLUSA LAÇO ISTAMBUL","style":"20002600","code_color":"20002600_293","color_slug":"laranja-queimado","color":"LARANJA QUEIMADO","on_sale":false,"regular_price":"R$ 149,90","actual_price":"R$ 149,90","discount_percentage":"","installments":"3x R$ 49,97","image":"https://viniciusvinna.netlify.app/assets/api-fashionista/20002600_293_catalog_1.jpg","sizes":[{"available":true,"size":"PP","sku":"5789_311_0_PP"},{"available":true,"size":"P","sku":"5789_311_0_P"},{"available":true,"size":"M","sku":"5789_311_0_M"},{"available":false,"size":"G","sku":"5789_311_0_G"},{"available":false,"size":"GG","sku":"5789_311_0_GG"}]}  
    ];
  
    function handleComprar(event, produto) {
      event.preventDefault();
      props.adicionarProduto(produto);
      props.exibirMensagem(produto);
    }
  
    function render() {
      let key = 1;
      const cards = produtos.map(produto =>
       <Container>
          <Card
            key={key}
            data-testid={'card' + key++}
            style={{ width: '18rem', margin: '10px', float: 'left' }}>
            <Card.Img variant="top" src={produto.image} />
            <Card.Body className="text-center">
              <Card.Title style={{ height: '40px' }}>
                {produto.name}
              </Card.Title>
              <Card.Text>
                {produto.color}  
              </Card.Text>
              <Button
                variant="success"
                style={{ width: '100%' }}
                onClick={(event) => handleComprar(event, produto)}>
                Comprar ({produto.actual_price})
              </Button>
            </Card.Body>
          </Card>
        </Container> 
      );
      return cards;
    }
  
    return render();
  }
  
  ListarProdutos.propTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired
  }
  
  export default ListarProdutos;
  