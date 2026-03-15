#!/bin/bash

# All remaining folder definitions (33A-52B)
declare -a entries=(
    "33A|Protective Stops|05交易管理|33a-protective-stops"
    "33B|Protective Stops|05交易管理|33b-protective-stops"
    "33C|Protective Stops|05交易管理|33c-protective-stops"
    "33D|Protective Stops|05交易管理|33d-protective-stops"
    "33E|Protective Stops|05交易管理|33e-protective-stops"
    "33F|Protective Stops|05交易管理|33f-protective-stops"
    "33G|Protective Stops|05交易管理|33g-protective-stops"
    "34A|Actual Risk|05交易管理|34a-actual-risk"
    "34B|Actual Risk|05交易管理|34b-actual-risk"
    "35A|Scaling in|05交易管理|35a-scaling-in"
    "35B|Scaling in|05交易管理|35b-scaling-in"
    "35C|Scaling in|05交易管理|35c-scaling-in"
    "36A|Trade Management and Taking Profits|05交易管理|36a-trade-management"
    "36B|Trade Management and Taking Profits|05交易管理|36b-trade-management"
    "37A|How to trade|05交易管理|37a-how-to-trade"
    "37B|How to trade|05交易管理|37b-how-to-trade"
    "38A|Trading MTR Tops|06交易策略|38a-trading-mtr-tops"
    "38B|Trading MTR Tops|06交易策略|38b-trading-mtr-tops"
    "38C|Trading MTR Tops|06交易策略|38c-trading-mtr-tops"
    "38D|Trading MTR Tops|06交易策略|38d-trading-mtr-tops"
    "39A|Trading MTR Bottoms|06交易策略|39a-trading-mtr-bottoms"
    "39B|Trading MTR Bottoms|06交易策略|39b-trading-mtr-bottoms"
    "39C|Trading MTR Bottoms|06交易策略|39c-trading-mtr-bottoms"
    "39D|Trading MTR Bottoms|06交易策略|39d-trading-mtr-bottoms"
    "40A|Entering Late in Trends|06交易策略|40a-entering-late-trends"
    "40B|Entering Late in Trends|06交易策略|40b-entering-late-trends"
    "40C|Entering Late in Trends|06交易策略|40c-entering-late-trends"
    "40D|Entering Late in Trends|06交易策略|40d-entering-late-trends"
    "40E|Entering Late in Trends|06交易策略|40e-entering-late-trends"
    "41A|Trading Breakouts|06交易策略|41a-trading-breakouts"
    "41B|Trading Breakouts|06交易策略|41b-trading-breakouts"
    "41C|Trading Breakouts|06交易策略|41c-trading-breakouts"
    "41D|Trading Breakouts|06交易策略|41d-trading-breakouts"
    "42A|Trading Climactic Reversals (Failed Breakouts)|06交易策略|42a-climactic-reversals"
    "42B|Trading Climactic Reversals (Failed Breakouts)|06交易策略|42b-climactic-reversals"
    "42C|Trading Climactic Reversals (Failed Breakouts)|06交易策略|42c-climactic-reversals"
    "43A|Trading Tight Bull Channels|06交易策略|43a-tight-bull-channels"
    "43B|Trading Tight Bull Channels|06交易策略|43b-tight-bull-channels"
    "43C|Trading Tight Bull Channels|06交易策略|43c-tight-bull-channels"
    "43D|Trading Tight Bull Channels|06交易策略|43d-tight-bull-channels"
    "44A|Trading Tight Bear Channels|06交易策略|44a-tight-bear-channels"
    "44B|Trading Tight Bear Channels|06交易策略|44b-tight-bear-channels"
    "44C|Trading Tight Bear Channels|06交易策略|44c-tight-bear-channels"
    "44D|Trading Tight Bear Channels|06交易策略|44d-tight-bear-channels"
    "45A|Trading Broad Bull Channels|06交易策略|45a-broad-bull-channels"
    "45B|Trading Broad Bull Channels|06交易策略|45b-broad-bull-channels"
    "45C|Trading Broad Bull Channels|06交易策略|45c-broad-bull-channels"
    "45D|Trading Broad Bull Channels|06交易策略|45d-broad-bull-channels"
    "45E|Trading Broad Bull Channels|06交易策略|45e-broad-bull-channels"
    "46A|Trading Broad Bear Channels|06交易策略|46a-broad-bear-channels"
    "46B|Trading Broad Bear Channels|06交易策略|46b-broad-bear-channels"
    "46C|Trading Broad Bear Channels|06交易策略|46c-broad-bear-channels"
    "46D|Trading Broad Bear Channels|06交易策略|46d-broad-bear-channels"
    "46E|Trading Broad Bear Channels|06交易策略|46e-broad-bear-channels"
    "47A|Trading in Trading Ranges|06交易策略|47a-trading-ranges"
    "47B|Trading in Trading Ranges|06交易策略|47b-trading-ranges"
    "47C|Trading in Trading Ranges|06交易策略|47c-trading-ranges"
    "47D|Trading in Trading Ranges|06交易策略|47d-trading-ranges"
    "48A|Trading the Open|07实战案例|48a-trading-open"
    "48B|Trading the Open|07实战案例|48b-trading-open"
    "48C|Trading the Open|07实战案例|48c-trading-open"
    "48D|Trading the Open|07实战案例|48d-trading-open"
    "48E|Trading the Open|07实战案例|48e-trading-open"
    "48F|Trading the Open|07实战案例|48f-trading-open"
    "48G|Trading the Middle of the Day|07实战案例|48g-trading-midday"
    "48H|Trading the Middle of the Day|07实战案例|48h-trading-midday"
    "48I|Trading the End of the Day|07实战案例|48i-trading-end"
    "48J|Trading the End of the Day|07实战案例|48j-trading-end"
    "48K|Trading the End of the Day|07实战案例|48k-trading-end"
    "49A|Swing trading examples|07实战案例|49a-swing-examples"
    "49B|Swing Trading Examples|07实战案例|49b-swing-examples"
    "49C|Swing Trading Examples|07实战案例|49c-swing-examples"
    "49D|Swing Trading Examples|07实战案例|49d-swing-examples"
    "49E|Swing Trading Examples|07实战案例|49e-swing-examples"
    "49F|Swing Trading Examples|07实战案例|49f-swing-examples"
    "50A|Scalping|07实战案例|50a-scalping"
    "50B|Scalping|07实战案例|50b-scalping"
    "50C|Scalping|07实战案例|50c-scalping"
    "50D|Scalping|07实战案例|50d-scalping"
    "50E|Scalping|07实战案例|50e-scalping"
    "51A|Losing Because of Mistakes|07实战案例|51a-losing-mistakes"
    "51B|Losing Because of Mistakes|07实战案例|51b-losing-mistakes"
    "51C|Losing Because of Mistakes|07实战案例|51c-losing-mistakes"
    "51D|Losing Because of Mistakes|07实战案例|51d-losing-mistakes"
    "52A|Losing When Good Trade Goes Bad|07实战案例|52a-losing-good-trade"
    "52B|Losing When Good Trade Goes Bad|07实战案例|52b-losing-good-trade"
)

# Generate all entries
for entry in "${entries[@]}"; do
    IFS='|' read -r prefix name doc_dir filename <<< "$entry"
    
    cat >> "提示词集合.md" << ENDFILE

---

务必使用 opsx:propose 这个skills创建任务，然后用使用 opsx:apply 实施，最后使用 opsx:archive 归档
任务描述： C:\\code\\CookBook\\docs\\images\\$prefix $name 是图片文件夹，C:\\code\\CookBook\\docs\\$doc_dir\\$filename.md是对应的md文档，逐张总结文件夹中每个图片的内容，依次将图片以及对图片内容的总结添加到md文档中，注意这是一个python的mkdocs项目。
验收标准：
1.md文档中包含图片文件夹所有的图片以及对图片内容的解读总结，并且无需添加目录 
2.图片都是../images/开头的 
3.将md文档加入mkdocs的nav中
4.不要有重复的图片
ENDFILE
done

echo "All $((${#entries[@]})) entries appended successfully!"
