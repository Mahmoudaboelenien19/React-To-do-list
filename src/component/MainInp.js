import React, { useEffect, useState, useRef, useReducer } from "react";
import Delpop from "./Delpop";

import { reducer, int } from "./actionReducer";
import { ToastContainer, toast } from "react-toastify";
import "./1.css";
function MainInp() {
  const btn = useRef();
  const inpp = useRef();
  const delAll = useRef();
  const placeholderRef = useRef();

  const [checked, setchecked] = useState(false);
  const [disappear, setdis] = useState(false);
  const [style, setStyle] = useState("block");

  useEffect(() => {
    setchecked(false);
  });

  const [update, setupdate] = useState({});

  const [Mode, setMode] = useState(true);
  useEffect(() => {
    if (Mode) {
      placeholderRef.current.innerHTML = "insert a task ...";
    } else {
      placeholderRef.current.innerHTML = "update the task ...";
    }
  }, [Mode]);

  useEffect(() => {
    if (style == "none") {
      inpp.current.blur();
    } else {
      inpp.current.focus();
    }
  }, [style]);

  const [placeholder, setPlaceholder] = useState("");

  const [task, dispatch] = useReducer(reducer, int);

  // // remove checked icon when updating
  // const check = useRef(task.map(() => React.createRef()));

  // useEffect(() => {
  // if (!disappear) return;
  // Object.values(check.current[task.indexOf(update)])[0].style.display =
  // "none";
  // }, [disappear, update, checked]);

  // save array in local

  const opOneRef = useRef();
  const opTwoRef = useRef();

  const [filtered, setFiltered] = useState("three");

  const [shown, setshown] = useState(task);

  useEffect(() => {
    opTwoRef.current.innerHTML = `Done :  ${
      task.filter((e) => e.checked == "checked").length
    }`;
    opOneRef.current.innerHTML = `Undone :  ${
      task.filter((e) => e.checked == "notChecked").length
    }`;
    if (filtered == "one") {
      setshown(task.filter((e) => e.checked == "notChecked"));
    } else if (filtered == "two") {
      setshown(task.filter((e) => e.checked == "checked"));
    } else {
      setshown(task);
    }
  }, [filtered, task]);

  const [indexUp, setindexUp] = useState();

  const [goUp, setgoUp] = useState("one");

  const checkIndex = (i) => {
    if (i < 0) {
      console.log(i);
      console.log(shown.length);
      return shown.length;
    } else if (i > shown.length) {
      //shown.length not shown.length-1 because it works on shown that i deleted one element from
      return 0;
    } else {
      return i;
    }
  };

  useEffect(() => {
    // because i dont want this code works at start because  indexUp is undefined
    if (goUp == "one") return;
    const element = task != [] ? shown[indexUp] : "";

    shown.splice(indexUp, 1);
    if (goUp) {
      shown.splice(checkIndex(indexUp - 1), 0, element);
    } else if (!goUp) {
      shown.splice(checkIndex(indexUp + 1), 0, element);
    }
    // console.log(shown)
    setshown(shown);
    setgoUp("one");
    setindexUp("");
    localStorage.setItem("tasks", JSON.stringify(shown));
  }, [indexUp]);

  // start with color Options

  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  const arrClrs = ["red", "green", "darkblue", "blueviolet", "yellow"];

  const colors = {
    one: "darkblue",
    two: arrClrs[Math.floor(Math.random() * arrClrs.length)],
    three: `#${randomColor()}`,
  };

  // getting selected color option from local if avaiable or make one as default value
  const [clrOption, setClrOption] = useState(
    localStorage.color ? localStorage.getItem("color") : "one"
  );

  // save selected color option in local
  useEffect(() => {
    localStorage.setItem("color", clrOption);
  }, [clrOption]);

  const clrSelected = (id) => {
    setClrOption(id);
  };
  // end with clr options

  const handleCreate = () => {
    if (Mode) {
      {
        dispatch({
          type: "addingToArr",
          payload: { value: inpp.current.value, clr: colors[clrOption] },
        });
      }
      setFiltered("three");

      toast.success("added!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
    }
  };

  const handleUpdate = () => {
    if (!Mode) {
      {
        dispatch({
          type: "update",
          payload: { value: inpp.current.value, id: update.id },
        });
        setMode(true);
      }
      // handlepop("green",`updated`)
      toast.success("updated!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setupdate({});
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const [delall, setdelall] = useState(false);
  // x=task,s

  const handleDelpopup = (s = shown) => {
    // if( s!="del")   return   handlepop(false)   ;
    dispatch({ type: "deleteAll" });
    // handlepop("green",`all deleted`)
    toast.success("all deleted!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
  };

  return (
    <div>
      {/* {delall&&<div id="hh"></div>} */}
      <div className="row  g-0 mx-auto" id="main">
      <ToastContainer
      theme="dark"
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        <div className="col-8 w-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="input-group  w-100 mx-auto   mt-5  justify-content-center"
          >
            <div className={`input  ${style}`}>
              <input
                ref={inpp}
                className="rounded-start"
                onChange={(e) => {
                  e.target.value.length > 0
                    ? setPlaceholder("top")
                    : setPlaceholder("none");
                  if (e.target.value.length == 0) {
                    inpp.current.style.cssText = `border-bottom:2px solid rgba(110, 110, 236, 0.808);`;
                  }
                  if (e.target.value.length > 25) {
                    inpp.current.style.cssText = `border-bottom:2px solid red;`;
                  }
                  if (
                    inpp.current.value.length <= 25 &&
                    e.target.value.length > 0
                  ) {
                    inpp.current.style.cssText = `border-bottom:2px solid green;`;
                  }
                }}
                onFocus={() => {
                  setTimeout(() => {
                    placeholderRef.current.style.display = "block";
                  }, 500);
                }}
                onBlur={() => {
                  inpp.current.style.cssText = `border-bottom:2px solid rgba(110, 110, 236, 0.808);`;

                  setStyle("none");
                  setMode(true);
                  placeholderRef.current.style.display = "none";
                  setPlaceholder("");
                  setdis(false);
                  inpp.current.value = "";
                }}
                // style={{ display: style }}

                type="text"
              />
              <div
                className={placeholder}
                id="placeholder"
                style={{ display: "none" }}
                ref={placeholderRef}
              ></div>
            </div>

            <button
              ref={btn}
              className="btn btn-danger rounded-0  shadow-none"
              onClick={() => {
                if (inpp.current.value.length == 0) {
                  // handlepop("red",`add a task plz`)
                  toast.error(`add a task plz`, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  return;
                }
                if (inpp.current.value.length > 25) {
                  // handlepop("red",`you can't exceed 25 letters`)
                  toast.error(`you can't exceed 25 letters!`, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });

                  return;
                }
                if (inpp.current.value.length < 25) {
                  inpp.current.style.cssText = `border-bottom:2px solid green;`;

                  handleCreate();
                  handleUpdate();
                  inpp.current.value = "";
                  setPlaceholder("");
                  inpp.current.style.cssText = `border-bottom:2px solid rgba(110, 110, 236, 0.808);`;
                }
              }}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => {
                setStyle("block");
              }}
            >
              {Mode ? (
                <div>
                  add tasks <i className="bi bi-arrow-bar-right"></i>
                </div>
              ) : (
                <div>
                  update <i className="bi bi-arrow-left-right"></i>
                </div>
              )}{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="container w-75">
        <div className="row g-0 mx-auto mt-3 mb-1  justify-content-between">
          <div className="col-4 col-md-3 col-lg-3 " id="arrow">
            <span></span>
            <select
              id="filtered"
              onChange={(e) => {
                setFiltered(e.target.value);
                console.log(e.target.value);
              }}
              value={filtered}
              className="form-select w-75 h-100 form-select-lg w-100 shadow-none"
              aria-label=".form-select-lg example"
            >
              <option value="two" ref={opTwoRef}>
                {" "}
              </option>
              <option value="one" ref={opOneRef}>
                {" "}
              </option>
              <option value="three"> Filter</option>
            </select>
          </div>
        </div>

        <div className="row w-100 mx-auto" id="task-container">
          <div className="task-top">
            <div className="clr">
              <div
                className={clrOption == "one" ? "active" : null}
                id="one"
                onClick={(e) => clrSelected(e.target.id)}
              ></div>
              <div
                className={clrOption == "two" ? "active" : null}
                id="two"
                onClick={(e) => clrSelected(e.target.id)}
              ></div>
              <div
                className={clrOption == "three" ? "active" : null}
                id="three"
                onClick={(e) => clrSelected(e.target.id)}
              ></div>{" "}
            </div>
            {task.length > 1 && (
              <div
                ref={delAll}
                onClick={() => {
                  setdelall(true);
                  console.log(delall);
                  // handleDelpopup()
                }}
                className="col-5 col-md-4 col-lg-3 mt-1"
              >
                {delall && (
                  <Delpop
                    handleDelpopup={handleDelpopup}
                    task={task}
                    setdelall={setdelall}
                  />
                )}

                <div className="btn btn-danger h-100 d-flex align-items-center justify-content-center  w-100 shadow-none">
                  <span>Delete All ({task.length}) </span>
                </div>
              </div>
            )}{" "}
          </div>

          {task.length == 0 ? (
            <div id="no-data" className="w-100 my-auto  text-dark text-center ">
              There is no data to show
            </div>
          ) : (
            shown.map((e, i) => {
              return (
                <div
                  style={{ background: e.color }}
                  className="  col-10 col-md-9 task-added mx-auto"
                  key={Math.random()}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <div className="content">
                    <p className={e.checked}> {e.content}</p>
                    <p> {`${e.s} ${e.d} & ${e.t}`}</p>
                  </div>

                  <div id="icons">
                    <div className="process">
                      <i
                        className="bi bi-pencil-square"
                        onClick={() => {
                          setdis(true);
                          inpp.current.value = e.content;
                          setMode(false);
                          setupdate(e);
                          setStyle("block");

                          setPlaceholder("top");
                        }}
                        onMouseDown={(e) => e.preventDefault()}
                      ></i>
                      <span>update</span>{" "}
                    </div>
                    {/* ref={check.current[i]} */}
                    <div
                      className="process"
                      style={{ display: e.id == update.id ? "none" : "block" }}
                    >
                      <i
                        className="bi bi-check"
                        data-check={e.id}
                        onClick={() => {
                          dispatch({ type: "check", payload: e.id });

                          setchecked(disappear ? true : false);
                        }}
                        onMouseDown={(e) => e.preventDefault()}
                      ></i>
                      <span>checked</span>{" "}
                    </div>

                    {Mode ? (
                      <div className="process">
                        <i
                          className="bi bi-trash2-fill"
                          onClick={() => {
                            dispatch({ type: "delete", payload: e.id });
                            // handlepop("green",`deleted`)
                            toast.success(`deleted!`, {
                                position: "bottom-left",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                              });
                          }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                          }}
                        ></i>
                        <span>delete </span>{" "}
                      </div>
                    ) : null}
                    {shown.length > 1 && (
                      <div id="up">
                        <i
                          className="bi bi-arrow-up-circle-fill"
                          id="upp"
                          // style={{display:shown.length>1?"block":"none"}}

                          onClick={() => {
                            dispatch({ type: "up", payload: e.id, index: i });
                            setindexUp(i);
                            setgoUp(true);
                          }}
                        ></i>
                        <i
                          className="bi bi-arrow-down-circle-fill"
                          // style={{display:shown.length>1?"block":"none"}}
                          onClick={() => {
                            dispatch({
                              type: "down",
                              payload: { value: e.id, index: i },
                            });
                            setindexUp(i);
                            setgoUp(false);
                          }}
                        ></i>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default MainInp;
