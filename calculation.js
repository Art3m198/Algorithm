
var GLOBAL_ARRAY = new Array();
var GLOBAL_LENGTH = 0;
var max = 51;
var mrez = new Array(max);

function raschet()
{
ClearTableResult();
var ks = GLOBAL_LENGTH;

var d = GLOBAL_ARRAY;
var hmax = document.getElementById("max_deep").value;

if(GLOBAL_LENGTH == 0)
{
	alert ("The source data table is empty!");
	return;
}
if (hmax < 0){alert ("The maximum cutting depth cannot be negative");
                return false;
            }
var ns;
var h;
	var kp = 0;
	var dobr;
	var lobr = 0;
	var ngobr;
	var kgobr;
	var rez = 0;
	for (var i = 0; i < max; i++)
	{
		mrez[i] = new Array(7);
		for (var j = 0; j < 7; j++)
			mrez[i][j] = 0;
	}

	var kz = 1;
	var v = 0;
	while(true)
	{
		ns = -1;
		// Т1
		for (i = 0; i < ks; i++)
		{
			if (d[i][6] > d[i][4])
			{
				if (ks - 1 == i)
				{
					ns = i+1;
					break;
				}
				if ((d[i][6] - d[i + 1][6]) > hmax * 2)
				{
					ns = i+1;
					break;
				}
				else
				{
					v = 0;
					for (j = 0; j < ks; j++)
					{
						if (j != i)
						{
							if (d[j][6] != d[j][4])
							{
								v = 1;
								break;
							}
						}
		
					}
					if (v == 0)
					{
						ns = i+1;
						break;
					}
				}
			}
		}
		if (ns == -1)
		{
			kz = 2;
			if (kp == 0)
			{
	            alert("The workpiece does not require processing");
				kz = 3;
			}
		}
		if (kz > 1)
	    {
			break;
	    }
		//Т2
		h = (d[ns-1][6] - d[ns-1][4]) / 2;
		if (h > hmax)
	    {
			h = hmax;
	    }
		dobr = d[ns-1][6] - 2 * h;
		lobr = parseInt("0");
		ngobr = d[ns-1][1];
		for (j = ns-1; j >= 0; --j)
		{
			if (dobr >= d[j][4])
			{
				lobr =  parseInt(lobr) + parseInt(d[j][3]);
				if (j == ns-1)
				{
					kgobr = d[j][2];
				}
				d[j][6] = dobr;
				ngobr = d[j][1];
			}
		}
		if (kz > 1)
	    {
			break;
	    }
		//Т3
		kp++;
		if (kp >= max)
		{
	        alert("Too many transitions, increase the cutting depth");
			kz = 2;
			break;
		}
		mrez[rez][0] = kp;

		mrez[rez][1] = 12;
		mrez[rez][2] = ngobr;
		mrez[rez][3] = kgobr;
		mrez[rez][4] = lobr;
		mrez[rez][5] = dobr;
		mrez[rez][6] = Math.round(h * 100) / 100;
  tableContent = "<tr>";

  var entry = [mrez[rez][0],mrez[rez][1],mrez[rez][2],mrez[rez][3],mrez[rez][4],mrez[rez][5],mrez[rez][6]]

 for(var i = 0; i < 7; i++){ 
 tableContent += "<td>" + entry[i] + "</td>"; 
 }; 
 tableContent += "</tr>"; 
  tableBodyResoult.innerHTML += tableContent; 
	rez++;
}
for (i = 0; i < ks; i++)
{
	d[i][6] = d[i][5];	
}


return mrez;
}

var d1=0;