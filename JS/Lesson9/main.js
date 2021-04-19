// function wakeUp(alarm, cb) {
//     setTimeout(() => {
//         if (alarm) {
//             cb(null, 'прокинувся');
//             return
//         }
//         cb('проспав');
//
//     }, 0);
// }
//
// function eat(food, cb) {
//     setTimeout(() => {
//         if (food) {
//             cb(null, 'їм');
//             return
//         }
//         cb('нема шо їсти', null);
//     }, 250);
// }
//
// function goWork(car, cb) {
//     setTimeout(() => {
//         if (car) {
//             cb(null, 'їду на роботу');
//             return
//         }
//         cb('прогуляв', null);
//     }, 2000);
// }
//
// function doWork(isHaveTask, cb) {
//     setTimeout(() => {
//         if (isHaveTask) {
//             cb(null, ('роблю роботу'))
//             return
//         }
//         cb('попью кави', null);
//     }, 7000);
// }
//
// function goHome(isWorkDone, cb) {
//     setTimeout(() => {
//         if (isWorkDone) {
//             cb(null, 'йду до дому')
//             return
//         }
//         cb('ще рано йти, э робота', null);
//     }, 1000);
// }
//
// function study(isAtHome, cb) {
//     setTimeout(() => {
//         if (isAtHome) {
//             cb(null,'вчусь' )
//             return
//         }
//         cb('ще не дома')
//
//     }, 5000)
// }
//
// function goSleep(isAllDone, cb) {
//     setTimeout(() => {
//         if (isAllDone) {
//
//             cb(null, 'лягаю спати')
//             return
//         }
//             cb('ще рано лягати спати');
//     }, 200)
// }
//
// wakeUp(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         eat(true, (err, data) => {
//             if (!err) {
//                 console.log(data);
//                 goWork(true, (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         doWork(true, (err, data) => {
//                             if (!err) {
//                                 console.log(data);
//                                 goHome(true, (err, data) => {
//                                     if (!err) {
//                                         console.log(data);
//                                         study(true, (err, data) => {
//                                             if (!err) {
//                                                 console.log(data);
//                                                 goSleep(true, (err, data) => {
//                                                     if (!err) {
//                                                         console.log(data);
//                                                         return
//                                                     }
//                                                     console.log(err);
//                                                 })
//                                                 return
//                                             }
//                                             console.log(err);
//                                         })
//                                         return
//                                     }
//                                     console.log(err);
//                                 })
//                                 return
//                             }
//                             console.log(err);
//                         })
//                         return
//                     }
//                     console.log(err);
//                 })
//                 return
//             }
//             console.log(err);
//         })
//         return
//     }
//     console.log(err);
// })
// eat(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         return
//     }
//     console.log(err);
// })
// goWork(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         doWork(true, (err, data) => {
//             if (!err) {
//                 console.log(data);
//                 return
//             }
//             console.log(err);
//         })
//         return
//     }
//     console.log(err);
// })
// doWork(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         return
//     }
//     console.log(err);
// })
// goHome(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         return
//     }
//     console.log(err);
// })
// study(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         return
//     }
//         console.log(err);
// })
// goSleep(true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         return
//     }
//         console.log(err);
// })
//--------------------------------------------------------------------------------------------------------------


// function wakeUp(alarm) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (alarm) {
//                 resolve('прокинувся');
//                 return
//             }
//             reject('проспав')
//         }, 0);
//     })
// }
//
// function eat(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 resolve('їм')
//                 return
//             }
//             reject('нема шо їсти')
//         }, 250);
//
//     })
// }
//
// function goWork(car) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (car) {
//                 resolve('їду на роботу')
//                 return
//             }
//             reject('прогуляв')
//         }, 2000);
//     })
//
// }
//
// function doWork(isHaveTask) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isHaveTask) {
//                 resolve('роблю роботу')
//                 return
//             }
//             reject('попью кави')
//         }, 7000);
//     })
//
// }
//
// function goHome(isWorkDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkDone) {
//                 resolve('йду до дому')
//                 return
//             }
//             reject('ще рано йти, э робота')
//         }, 1000);
//     })
//
// }
//
// function study(isAtHome) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isAtHome) {
//                 resolve('вчусь')
//                 return
//             }
//             reject('ще не дома')
//
//         }, 5000)
//     })
//
// }
//
// function goSleep(isAllDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isAllDone) {
//                 resolve('лягаю спати')
//                 return
//             }
//             reject('ще рано лягати спати')
//         }, 200)
//     })
//
// }

// wakeUp(true)
//     .then(value => {
//         console.log(value);
//         return eat(true)
//     })
//     .then(value => {
//         console.log(value)
//         return goWork(true)
//     })
//     .then(value => {
//         console.log(value)
//         return doWork(true)
//     })
//     .then(value => {
//         console.log(value)
//         return goHome(true)
//     })
//     .then(value => {
//         console.log(value)
//         return study(true)
//     })
//     .then(value => {
//         console.log(value)
//         return goSleep(true)
//     })
//     .then(value => {
//         console.log(value)
//     })
//     .catch(reason => {
//         console.error(reason)
//     })

//---------------------------------------------------------------------------------------

function wakeUp(alarm) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (alarm) {
                resolve('прокинувся');
                return
            }
            reject('проспав')
        }, 0);
    })
}

function eat(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                resolve('їм')
                return
            }
            reject('нема шо їсти')
        }, 250);

    })
}

function goWork(car) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (car) {
                resolve('їду на роботу')
                return
            }
            reject('прогуляв')
        }, 2000);
    })

}

function doWork(isHaveTask) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isHaveTask) {
                resolve('роблю роботу')
                return
            }
            reject('попью кави')
        }, 7000);
    })

}

function goHome(isWorkDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkDone) {
                resolve('йду до дому')
                return
            }
            reject('ще рано йти, э робота')
        }, 1000);
    })

}

function study(isAtHome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isAtHome) {
                resolve('вчусь')
                return
            }
            reject('ще не дома')

        }, 5000)
    })

}

function goSleep(isAllDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isAllDone) {
                resolve('лягаю спати')
                return
            }
            reject('ще рано лягати спати')
        }, 200)
    })

}

async function dayTime() {
    try {
        let value = await wakeUp(true);
        console.log(value)
        value = await eat(true);
        console.log(value);
        value = await goWork(true);
        console.log(value);
        value = await doWork(true);
        console.log(value);
        value = await goHome(true);
        console.log(value);
        value = await study(true);
        console.log(value);
        value = await goSleep(true);
        console.log(value);
    } catch (err) {
        console.error(err);
    }
}

dayTime();
