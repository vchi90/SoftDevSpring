from flask import Flask, render_template, request, redirect, url_for

from util import mdb

app = Flask(__name__)

ipaddr = "68.183.104.137"

@app.route("/")
def main():
	return render_template("index.html")

@app.route("/changeIP")
def changeIP():
	newip = ".".join([request.args["ip1"], request.args["ip2"], request.args["ip3"], request.args["ip4"]])
	ipaddr = newip
	mdb.changeAddr(newip)
	return redirect(url_for("main"))

@app.route("/search", methods=['GET', 'POST'])
def search():
    if (request.args.get("type") == "year"):
	    return render_template("results.html", content = search_year(request.args.get("argument"))
	elif (request.args.get("type") == "category"):
	    return render_template("results.html", content = search_category(request.args.get("argument"))
    else:
	    return render_template("results.html", content = search_num_lauretes(request.args.get("argument"))
		
app.debug = True
app.run()